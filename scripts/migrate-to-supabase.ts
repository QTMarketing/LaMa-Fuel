/**
 * Migration Script: Migrate mock data to Supabase
 * 
 * Usage:
 * 1. Make sure you have NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your .env.local
 * 2. Run: npx tsx scripts/migrate-to-supabase.ts
 * 
 * This script will:
 * - Migrate reviews from admin-data.ts to Supabase
 * - Optionally seed initial form submissions
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

// Mock reviews data (from admin-data.ts)
const mockReviews = [
  {
    customer_name: "John Doe",
    store_id: "1",
    store_name: "LaMa Fuel Downtown",
    rating: 5,
    comment: "Great service and competitive prices!",
    date: "2024-11-01",
    google_maps_link: "https://maps.google.com/?q=1501+Pipeline+Rd+E+Ste+B+Bedford+TX",
  },
  {
    customer_name: "Jane Smith",
    store_id: "1",
    store_name: "LaMa Fuel Downtown",
    rating: 4,
    comment: "Clean facility and friendly staff.",
    date: "2024-11-02",
    google_maps_link: "https://maps.google.com/?q=1501+Pipeline+Rd+E+Ste+B+Bedford+TX",
  },
  {
    customer_name: "Bob Johnson",
    store_id: "2",
    store_name: "LaMa Fuel North",
    rating: 5,
    comment: "Best fuel prices in town!",
    date: "2024-11-03",
    google_maps_link: "https://maps.google.com/?q=123+Main+St+Dallas+TX",
  },
  {
    customer_name: "Alice Brown",
    store_id: "1",
    store_name: "LaMa Fuel Downtown",
    rating: 3,
    comment: "Fuel is good, but service was slow.",
    date: "2024-11-04",
    google_maps_link: "https://maps.google.com/?q=1501+Pipeline+Rd+E+Ste+B+Bedford+TX",
  },
  {
    customer_name: "Charlie Green",
    store_id: "2",
    store_name: "LaMa Fuel North",
    rating: 5,
    comment: "Always a quick and easy stop.",
    date: "2024-11-05",
    google_maps_link: "https://maps.google.com/?q=123+Main+St+Dallas+TX",
  },
];

// Optional: Sample form submissions to seed
const sampleFormSubmissions = [
  {
    full_name: "Alice Wonderland",
    email: "alice@example.com",
    phone: "555-111-2222",
    company: "Wonderland Inc.",
    form_type: "brand_application",
    status: "new",
    message: "Interested in a branded fuel partnership for my new station in Phoenix.",
    source_page: "/solutions/branded",
    payload: {
      country: "USA",
      address: "123 Rabbit Hole, Phoenix, AZ",
      city: "Phoenix",
      zip: "85001",
      ownProperty: "yes",
      leaseTerm: "5 years",
      recommendedBrand: "Exxon",
      monthlyVolume: 50000,
    },
  },
  {
    full_name: "Bob The Builder",
    email: "bob@example.com",
    phone: "555-333-4444",
    company: "BobCo Construction",
    form_type: "contact",
    status: "in_progress",
    message: "Need a quote for bulk diesel delivery to a construction site.",
    source_page: "/contact",
    payload: {
      service: "bulk_delivery",
      location: "Downtown Project",
    },
  },
];

async function migrateReviews() {
  console.log("📝 Migrating reviews to Supabase...");

  // Check if reviews already exist
  const { data: existingReviews } = await supabase.from("reviews").select("id").limit(1);

  if (existingReviews && existingReviews.length > 0) {
    console.log("⚠️  Reviews table already has data. Skipping migration.");
    console.log("   To re-migrate, delete existing reviews first.");
    return;
  }

  const { data, error } = await supabase.from("reviews").insert(mockReviews).select();

  if (error) {
    console.error("❌ Error migrating reviews:", error);
    return;
  }

  console.log(`✅ Successfully migrated ${data?.length || 0} reviews to Supabase.`);
}

async function seedFormSubmissions() {
  console.log("📝 Seeding sample form submissions...");

  // Check if form submissions already exist
  const { data: existingForms } = await supabase.from("form_submissions").select("id").limit(1);

  if (existingForms && existingForms.length > 0) {
    console.log("⚠️  Form submissions table already has data. Skipping seed.");
    console.log("   To re-seed, delete existing form submissions first.");
    return;
  }

  const { data, error } = await supabase.from("form_submissions").insert(sampleFormSubmissions).select();

  if (error) {
    console.error("❌ Error seeding form submissions:", error);
    return;
  }

  console.log(`✅ Successfully seeded ${data?.length || 0} form submissions to Supabase.`);
}

async function main() {
  console.log("🚀 Starting Supabase migration...\n");

  try {
    // Test connection
    const { data, error } = await supabase.from("form_submissions").select("id").limit(1);
    if (error && error.message.includes("relation") && error.message.includes("does not exist")) {
      console.error("❌ Tables not found!");
      console.error("   Please run the SQL migration script (supabase-migration.sql) first in your Supabase SQL Editor.");
      process.exit(1);
    }

    console.log("✅ Connected to Supabase\n");

    // Migrate reviews
    await migrateReviews();
    console.log();

    // Seed form submissions (optional)
    await seedFormSubmissions();
    console.log();

    console.log("✨ Migration complete!");
  } catch (error: any) {
    console.error("❌ Migration failed:", error.message);
    process.exit(1);
  }
}

main();

