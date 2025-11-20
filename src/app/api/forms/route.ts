import { NextResponse } from "next/server";
import type { FormSubmission } from "@/types/admin";
import { createClient } from "@supabase/supabase-js";

const TABLE = "form_submissions";

// Initialize Supabase client lazily to avoid errors at module load time
function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim() || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  if (!supabaseUrl) {
    throw new Error("Supabase URL is not configured. Please set NEXT_PUBLIC_SUPABASE_URL in your .env.local file.");
  }

  if (!serviceKey) {
    throw new Error("Supabase API key is not configured. Please set SUPABASE_SERVICE_ROLE_KEY (recommended) or NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env.local file.");
  }

  // Validate URL format
  if (!supabaseUrl.startsWith("http://") && !supabaseUrl.startsWith("https://")) {
    throw new Error("Invalid Supabase URL format. URL must start with http:// or https://");
  }

  // Validate key format (Supabase keys are JWT-like strings, typically 100+ chars, but we'll be lenient)
  if (serviceKey.length < 20) {
    throw new Error("Invalid Supabase API key format. The key appears to be too short. Please check your SUPABASE_SERVICE_ROLE_KEY in .env.local");
  }

  return createClient(supabaseUrl, serviceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

const mapRow = (row: any): FormSubmission => ({
  id: row.id,
  fullName: row.full_name ?? "",
  email: row.email ?? "",
  phone: row.phone ?? undefined,
  company: row.company ?? undefined,
  formType: (row.form_type ?? "other") as FormSubmission["formType"],
  message: row.message ?? "",
  status: (row.status ?? "new") as FormSubmission["status"],
  sourcePage: row.source_page ?? undefined,
  submittedAt: row.submitted_at ?? row.created_at ?? new Date().toISOString(),
  payload: row.payload ?? undefined,
});

export async function GET() {
  try {
    const supabase = getSupabaseClient();
    
    // Build select query dynamically to handle missing columns gracefully
    const selectFields = [
      "id",
      "full_name",
      "email",
      "phone",
      "company",
      "form_type",
      "status",
      "message",
      "source_page",
      "submitted_at",
      "created_at",
      "payload",
    ].join(", ");

    const { data, error } = await supabase
      .from(TABLE)
      .select(selectFields)
      .order("submitted_at", { ascending: false })
      .order("created_at", { ascending: false });

  if (error) {
    console.error("[forms][GET] error", error);
    
    // If it's a schema error, provide helpful message
    if (error.message?.includes("schema cache") || error.message?.includes("column")) {
      return NextResponse.json({ 
        error: "Database schema issue detected.",
        hint: "Please run 'supabase-complete-fix.sql' in your Supabase SQL Editor.",
        details: error.message
      }, { status: 500 });
    }
    
    return NextResponse.json({ error: "Failed to load form submissions." }, { status: 500 });
  }

    return NextResponse.json({ data: data?.map(mapRow) ?? [] });
  } catch (error: any) {
    console.error("[forms][GET] Error initializing Supabase:", error);
    return NextResponse.json({ 
      error: error.message || "Failed to connect to database.",
      hint: "Please check your Supabase configuration in .env.local"
    }, { status: 500 });
  }
}

type CreateFormPayload = {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  formType?: FormSubmission["formType"];
  message?: string;
  sourcePage?: string;
  payload?: Record<string, unknown>;
};

export async function POST(request: Request) {
  try {
    console.log("[forms][POST] Request received");
    
    // Initialize Supabase client
    const supabase = getSupabaseClient();
    
    const body = (await request.json()) as CreateFormPayload;
    console.log("[forms][POST] Body received:", { 
      fullName: body.fullName, 
      email: body.email,
      hasPhone: !!body.phone,
      hasCompany: !!body.company,
      formType: body.formType 
    });
    
    if (!body.fullName || !body.email) {
      console.error("[forms][POST] Validation failed: missing fullName or email");
      return NextResponse.json({ error: "Full name and email are required." }, { status: 400 });
    }

    const submittedAt = new Date().toISOString();
    
    // Build submission object with only required fields first
    const submission: any = {
      full_name: body.fullName.trim(),
      email: body.email.trim(),
    };

    // Add optional fields only if they have values
    if (body.phone !== undefined && body.phone !== null && body.phone !== "") {
      submission.phone = body.phone.trim();
    }
    if (body.company !== undefined && body.company !== null && body.company !== "") {
      submission.company = body.company.trim();
    }
    if (body.formType !== undefined && body.formType !== null) {
      submission.form_type = body.formType;
    } else {
      submission.form_type = "brand_application";
    }
    submission.status = "new";
    if (body.message !== undefined && body.message !== null) {
      submission.message = body.message;
    } else {
      submission.message = "";
    }
    if (body.sourcePage !== undefined && body.sourcePage !== null) {
      submission.source_page = body.sourcePage;
    }
    submission.submitted_at = submittedAt;
    if (body.payload !== undefined && body.payload !== null) {
      submission.payload = body.payload;
    }

    console.log("[forms][POST] Submission object:", Object.keys(submission));
    console.log("[forms][POST] Attempting to insert into Supabase...");

    const { data, error } = await supabase.from(TABLE).insert(submission).select().single();

    if (error) {
      console.error("[forms][POST] insert error", error);
      console.error("[forms][POST] Error code:", error.code);
      console.error("[forms][POST] Error details:", error.details);
      console.error("[forms][POST] Full error message:", error.message);
      console.error("[forms][POST] Error hint:", error.hint);
      
      // Handle API key errors
      if (error.message?.includes("Invalid API key") || error.message?.includes("JWT") || error.code === "PGRST301") {
        return NextResponse.json({ 
          error: "Invalid Supabase API key.",
          hint: "Please check your SUPABASE_SERVICE_ROLE_KEY in .env.local. Make sure it's the correct service_role key from your Supabase project settings.",
          details: "The API key used to connect to Supabase is invalid or expired."
        }, { status: 401 });
      }
      
      // Handle missing table
      if (error.message?.includes("relation") && error.message?.includes("does not exist")) {
        return NextResponse.json({ 
          error: "Database table 'form_submissions' does not exist.",
          hint: "Please run 'supabase-complete-fix.sql' in your Supabase SQL Editor to create the table and all required columns.",
          details: error.message
        }, { status: 500 });
      }
      
      // Handle missing columns - try multiple regex patterns
      if (error.message?.includes("schema cache") || error.message?.includes("column") || error.code === "42703" || error.code === "PGRST116") {
        // Try different patterns to extract column name
        const columnMatch = 
          error.message.match(/column ['"]([^'"]+)['"]/i) ||
          error.message.match(/column\s+['"]([^'"]+)['"]/i) ||
          error.message.match(/['"]([^'"]+)['"]\s+does not exist/i) ||
          error.details?.match(/column ['"]([^'"]+)['"]/i) ||
          error.message.match(/Could not find the ['"]([^'"]+)['"] column/i) ||
          error.message.match(/['"]([^'"]+)['"] of ['"]([^'"]+)['"]/i);
        
        const missingColumn = columnMatch?.[1] || columnMatch?.[2] || "unknown";
        console.error(`[forms][POST] Missing column detected: ${missingColumn}`);
        console.error(`[forms][POST] Full error object:`, JSON.stringify(error, null, 2));
        console.error(`[forms][POST] Error message:`, error.message);
        console.error(`[forms][POST] Error details:`, error.details);
        console.error(`[forms][POST] Error hint:`, error.hint);
        console.error(`[forms][POST] Error code:`, error.code);
        
        // Show the actual error message to help debug
        const actualError = error.message || error.details || JSON.stringify(error);
        
        return NextResponse.json({ 
          error: `Database schema issue detected.`,
          hint: "Please run 'supabase-complete-fix.sql' in your Supabase SQL Editor to create the table and add all required columns.",
          details: actualError,
          missingColumn: missingColumn !== "unknown" ? missingColumn : undefined,
          fullError: process.env.NODE_ENV === "development" ? JSON.stringify(error, null, 2) : undefined
        }, { status: 500 });
      }

      // Handle other errors - return the actual error message
      const message = error.message || error.details || "Failed to store form submission.";
      return NextResponse.json({ 
        error: message,
        details: error.details || error.hint || error.message || "Unknown error occurred",
        code: error.code,
        fullError: process.env.NODE_ENV === "development" ? JSON.stringify(error, null, 2) : undefined
      }, { status: 500 });
    }

    if (!data) {
      console.error("[forms][POST] No data returned from insert");
      return NextResponse.json({ error: "Failed to store form submission." }, { status: 500 });
    }

    console.log("[forms][POST] Success! Submission ID:", data.id);
    return NextResponse.json({ data: mapRow(data) }, { status: 201 });
  } catch (error: any) {
    console.error("[forms][POST] Unexpected error:", error);
    console.error("[forms][POST] Error stack:", error?.stack);
    console.error("[forms][POST] Error name:", error?.name);
    
    // Handle Supabase initialization errors
    if (error?.message?.includes("Supabase") || error?.message?.includes("API key") || error?.message?.includes("URL")) {
      return NextResponse.json({ 
        error: error.message,
        hint: "Please check your .env.local file and ensure NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are set correctly."
      }, { status: 500 });
    }
    
    // Handle JSON parsing errors
    if (error instanceof SyntaxError) {
      return NextResponse.json({ 
        error: "Invalid request format.",
        details: "The request body could not be parsed as JSON."
      }, { status: 400 });
    }
    
    // Handle network/connection errors
    if (error?.message?.includes("fetch") || error?.code === "ECONNREFUSED") {
      return NextResponse.json({ 
        error: "Database connection failed.",
        hint: "Please check your Supabase configuration and network connection."
      }, { status: 503 });
    }
    
    const message = typeof error?.message === "string" ? error.message : "Unexpected error while submitting the form.";
    return NextResponse.json({ 
      error: message,
      details: error?.stack || "Check server logs for more details."
    }, { status: 500 });
  }
}

