# Quick Start: Supabase Setup

Follow these steps to set up Supabase for your LaMa Fuel admin panel.

## Step 1: Run the SQL Migration

1. Open your Supabase project dashboard
2. Go to **Database** → **SQL Editor** → **New Query**
3. Open the file `supabase-migration.sql` in this project
4. Copy and paste the entire SQL script into the editor
5. Click **Run** (or press `Cmd/Ctrl + Enter`)

This creates:
- ✅ `form_submissions` table
- ✅ `reviews` table
- ✅ Indexes and security policies

## Step 2: Verify Tables

1. Go to **Database** → **Tables**
2. You should see both tables listed

## Step 3: (Optional) Seed Sample Data

Run the migration script to populate sample data:

```bash
npm run migrate:supabase
```

This will add:
- 5 sample reviews
- 2 sample form submissions

## Step 4: Test It

1. Start your dev server: `npm run dev`
2. Submit a test form at `/brand-application`
3. Check the admin panel at `/admin` - you should see your submission!

## Troubleshooting

**"Could not find the table" error:**
- Make sure you ran the SQL migration script
- Refresh schema cache: Run `NOTIFY pgrst, 'reload schema';` in SQL Editor
- Wait 10 seconds and try again

**Migration script fails:**
- Check your `.env.local` has correct Supabase credentials
- Make sure tables exist (run SQL migration first)

For detailed instructions, see `SUPABASE_SETUP.md`.

