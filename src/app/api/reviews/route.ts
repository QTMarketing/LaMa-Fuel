import { NextResponse } from "next/server";
import type { Review } from "@/types/admin";
import { createClient } from "@supabase/supabase-js";

const TABLE = "reviews";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim() || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

if (!supabaseUrl) {
  console.error("[reviews] Missing NEXT_PUBLIC_SUPABASE_URL");
  throw new Error("Supabase URL is not configured. Please set NEXT_PUBLIC_SUPABASE_URL in your .env.local file.");
}

if (!serviceKey) {
  console.error("[reviews] Missing SUPABASE_SERVICE_ROLE_KEY and NEXT_PUBLIC_SUPABASE_ANON_KEY");
  throw new Error("Supabase API key is not configured. Please set SUPABASE_SERVICE_ROLE_KEY (recommended) or NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env.local file.");
}

// Validate URL format
if (!supabaseUrl.startsWith("http://") && !supabaseUrl.startsWith("https://")) {
  console.error("[reviews] Invalid Supabase URL format:", supabaseUrl);
  throw new Error("Invalid Supabase URL format. URL must start with http:// or https://");
}

// Validate key format
if (serviceKey.length < 50) {
  console.error("[reviews] Supabase key appears to be too short or invalid");
  throw new Error("Invalid Supabase API key format. Please check your SUPABASE_SERVICE_ROLE_KEY in .env.local");
}

const supabase = createClient(supabaseUrl, serviceKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

const mapRow = (row: any): Review => ({
  id: row.id,
  customerName: row.customer_name ?? "",
  storeId: row.store_id ?? "",
  storeName: row.store_name ?? undefined,
  rating: row.rating ?? 5,
  comment: row.comment ?? "",
  date: row.date ?? new Date().toISOString().split("T")[0],
  googleMapsLink: row.google_maps_link ?? undefined,
  createdAt: row.created_at ?? new Date().toISOString(),
});

export async function GET() {
  const { data, error } = await supabase
    .from(TABLE)
    .select("id, customer_name, store_id, store_name, rating, comment, date, google_maps_link, created_at")
    .order("date", { ascending: false })
    .order("created_at", { ascending: false });

  if (error) {
    console.error("[reviews][GET] error", error);
    return NextResponse.json({ error: "Failed to load reviews." }, { status: 500 });
  }

  return NextResponse.json({ data: data?.map(mapRow) ?? [] });
}

type CreateReviewPayload = {
  customerName: string;
  storeId: string;
  storeName?: string;
  rating: number;
  comment: string;
  date: string;
  googleMapsLink?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CreateReviewPayload;
    if (!body.customerName || !body.storeId || !body.rating || !body.comment || !body.date) {
      return NextResponse.json(
        { error: "Customer name, store ID, rating, comment, and date are required." },
        { status: 400 }
      );
    }

    const review = {
      customer_name: body.customerName,
      store_id: body.storeId,
      store_name: body.storeName ?? null,
      rating: body.rating,
      comment: body.comment,
      date: body.date,
      google_maps_link: body.googleMapsLink ?? null,
    };

    const { data, error } = await supabase.from(TABLE).insert(review).select().single();

    if (error || !data) {
      console.error("[reviews][POST] insert error", error);
      const message = error?.message || "Failed to store review.";
      return NextResponse.json({ error: message }, { status: 500 });
    }

    return NextResponse.json({ data: mapRow(data) }, { status: 201 });
  } catch (error: any) {
    console.error("[reviews][POST] unexpected error", error);
    const message = typeof error?.message === "string" ? error.message : "Unexpected error while submitting the review.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

