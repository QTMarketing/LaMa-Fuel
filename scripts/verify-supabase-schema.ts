/**
 * Script to verify and report on Supabase schema
 * This will check which columns exist and which are missing
 * 
 * Usage: npx tsx scripts/verify-supabase-schema.ts
 */

import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
import { join } from "path";

config({ path: join(process.cwd(), ".env.local") });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  console.error("❌ Missing Supabase environment variables");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const requiredColumns = [
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
  "payload",
  "created_at",
];

async function checkSchema() {
  console.log("🔍 Checking form_submissions table schema...\n");

  const missing: string[] = [];
  const existing: string[] = [];

  for (const col of requiredColumns) {
    try {
      // Try to select the column
      const { error } = await supabase
        .from("form_submissions")
        .select(col)
        .limit(0);

      if (error && error.message.includes("column") && error.message.includes("schema cache")) {
        missing.push(col);
        console.log(`❌ Missing: ${col}`);
      } else {
        existing.push(col);
        console.log(`✅ Found: ${col}`);
      }
    } catch (err: any) {
      if (err.message?.includes("column")) {
        missing.push(col);
        console.log(`❌ Missing: ${col}`);
      }
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`   ✅ Existing columns: ${existing.length}`);
  console.log(`   ❌ Missing columns: ${missing.length}`);

  if (missing.length > 0) {
    console.log(`\n⚠️  Missing columns detected!`);
    console.log(`\n📝 To fix, run this SQL in Supabase SQL Editor:\n`);
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("Open: supabase-complete-fix.sql");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
  } else {
    console.log(`\n✨ All required columns exist! Your schema is correct.\n`);
  }
}

checkSchema().catch(console.error);

