/**
 * Script to automatically add the 'company' column to form_submissions table
 * 
 * Usage: npx tsx scripts/fix-company-column.ts
 */

import { createClient } from "@supabase/supabase-js";
import { config } from "dotenv";
import { join } from "path";

// Load environment variables
config({ path: join(process.cwd(), ".env.local") });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceKey) {
  console.error("❌ Missing Supabase environment variables:");
  console.error("   - NEXT_PUBLIC_SUPABASE_URL");
  console.error("   - SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

async function fixCompanyColumn() {
  console.log("🔧 Checking if 'company' column exists...\n");

  try {
    // First, check if the column exists by trying to query it
    const { error: checkError } = await supabase
      .from("form_submissions")
      .select("company")
      .limit(1);

    if (!checkError) {
      console.log("✅ 'company' column already exists!");
      return;
    }

    // If we get here, the column doesn't exist
    console.log("⚠️  'company' column not found. Attempting to add it...\n");
    console.log("📝 Note: This requires running SQL in Supabase Dashboard.");
    console.log("    Please run the following SQL in your Supabase SQL Editor:\n");
    console.log("    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("    ALTER TABLE public.form_submissions ADD COLUMN IF NOT EXISTS company TEXT;");
    console.log("    NOTIFY pgrst, 'reload schema';");
    console.log("    ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

    // Try to use RPC to execute SQL (if available)
    const { data: rpcData, error: rpcError } = await supabase.rpc("exec_sql", {
      sql: "ALTER TABLE public.form_submissions ADD COLUMN IF NOT EXISTS company TEXT;",
    });

    if (!rpcError && rpcData) {
      console.log("✅ Successfully added 'company' column via RPC!");
      
      // Refresh schema cache
      await supabase.rpc("exec_sql", {
        sql: "NOTIFY pgrst, 'reload schema';",
      });
      
      console.log("✅ Schema cache refreshed!");
      return;
    }

    // If RPC doesn't work, we need manual SQL execution
    console.log("⚠️  Automatic fix not available. Please run the SQL manually.");
    console.log("    See instructions above or use: supabase-fix-company-column.sql\n");
    
  } catch (error: any) {
    console.error("❌ Error checking column:", error.message);
    console.log("\n📝 Please run the SQL fix manually:");
    console.log("   1. Open Supabase Dashboard → SQL Editor");
    console.log("   2. Run: supabase-fix-company-column.sql");
    console.log("   3. Wait 10 seconds and try submitting the form again.\n");
  }
}

async function main() {
  console.log("🚀 Fixing 'company' column issue...\n");
  await fixCompanyColumn();
  console.log("\n✨ Done!");
}

main();

