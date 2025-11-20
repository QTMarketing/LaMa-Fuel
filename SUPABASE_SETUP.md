# Supabase Setup Guide for LaMa Fuel

This guide will help you set up Supabase tables and migrate data for the LaMa Fuel admin panel.

## Prerequisites

1. A Supabase account and project (create one at [supabase.com](https://supabase.com))
2. Your Supabase project URL and API keys

## Step 1: Get Your Supabase Credentials

1. Go to your Supabase project dashboard
2. Navigate to **Settings** → **API**
3. Copy the following:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **anon/public key** (for `NEXT_PUBLIC_SUPABASE_ANON_KEY`)
   - **service_role key** (for `SUPABASE_SERVICE_ROLE_KEY`) - ⚠️ Keep this secret!

## Step 2: Add Environment Variables

Add these to your `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

## Step 3: Create Tables in Supabase

1. Open your Supabase project dashboard
2. Go to **Database** → **SQL Editor**
3. Click **New Query**
4. Copy and paste the entire contents of `supabase-migration.sql`
5. Click **Run** (or press `Cmd/Ctrl + Enter`)

This will create:
- `form_submissions` table (for brand application forms and other form submissions)
- `reviews` table (for customer reviews)
- Indexes for better query performance
- Row Level Security (RLS) policies

## Step 4: Verify Tables Were Created

1. Go to **Database** → **Tables**
2. You should see:
   - `form_submissions`
   - `reviews`

If you don't see them, check the SQL Editor for any errors and try again.

## Step 5: Migrate Mock Data (Optional)

If you want to seed your database with sample data:

1. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

2. Run the migration script:
   ```bash
   npm run migrate:supabase
   ```

This will:
- Migrate reviews from `admin-data.ts` to Supabase
- Seed sample form submissions

**Note:** The script will skip migration if data already exists. To re-migrate, delete existing records first.

## Step 6: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Submit a test form:
   - Go to `/brand-application` or any form page
   - Fill out and submit the form
   - Check the admin panel at `/admin` to see the submission

3. Check Supabase:
   - Go to **Database** → **Tables** → `form_submissions`
   - You should see your test submission

## Troubleshooting

### Error: "Could not find the table 'public.form_submissions'"

**Solution:**
1. Make sure you ran the SQL migration script (`supabase-migration.sql`)
2. Refresh the schema cache by running this in SQL Editor:
   ```sql
   NOTIFY pgrst, 'reload schema';
   ```
3. Wait a few seconds and try again

### Error: "permission denied for table"

**Solution:**
- Make sure you're using `SUPABASE_SERVICE_ROLE_KEY` (not the anon key) in your API routes
- Check that RLS policies are set up correctly (the migration script includes this)

### Migration script fails

**Solution:**
- Verify your `.env.local` has the correct Supabase credentials
- Make sure the tables exist (run `supabase-migration.sql` first)
- Check that `tsx` is installed: `npm install --save-dev tsx dotenv`

## Table Schemas

### `form_submissions`
- `id` (UUID, primary key)
- `full_name` (TEXT, required)
- `email` (TEXT, required)
- `phone` (TEXT, optional)
- `company` (TEXT, optional)
- `form_type` (TEXT, default: 'brand_application')
- `status` (TEXT, default: 'new', values: 'new', 'in_progress', 'resolved')
- `message` (TEXT, optional)
- `source_page` (TEXT, optional)
- `submitted_at` (TIMESTAMPTZ, default: NOW())
- `payload` (JSONB, optional - stores additional form data)
- `created_at` (TIMESTAMPTZ, default: NOW())

### `reviews`
- `id` (UUID, primary key)
- `customer_name` (TEXT, required)
- `store_id` (TEXT, required)
- `store_name` (TEXT, optional)
- `rating` (INTEGER, 1-5, required)
- `comment` (TEXT, required)
- `date` (DATE, required)
- `google_maps_link` (TEXT, optional)
- `created_at` (TIMESTAMPTZ, default: NOW())

## Next Steps

Once your tables are set up:
- Form submissions from your website will automatically save to Supabase
- The admin panel will display data from Supabase
- You can manage submissions directly in Supabase or through the admin panel

For production, consider:
- Setting up proper RLS policies for your use case
- Adding database backups
- Setting up monitoring and alerts

