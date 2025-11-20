-- COMPLETE FIX: Recreate form_submissions table with all required columns
-- Run this ONCE in your Supabase SQL Editor to fix all column issues
-- This will ensure the table has all required columns

-- Step 1: Drop the existing table if it exists (WARNING: This deletes all data!)
-- Uncomment the next line ONLY if you want to start fresh and don't have important data
-- DROP TABLE IF EXISTS public.form_submissions CASCADE;

-- Step 2: Create the table with ALL required columns
CREATE TABLE IF NOT EXISTS public.form_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  form_type TEXT NOT NULL DEFAULT 'brand_application',
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved')),
  message TEXT,
  source_page TEXT,
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  payload JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Step 3: Add any missing columns (safe to run even if columns exist)
DO $$ 
BEGIN
  -- Add phone if missing
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'form_submissions' AND column_name = 'phone') THEN
    ALTER TABLE public.form_submissions ADD COLUMN phone TEXT;
  END IF;
  
  -- Add company if missing
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'form_submissions' AND column_name = 'company') THEN
    ALTER TABLE public.form_submissions ADD COLUMN company TEXT;
  END IF;
  
  -- Add form_type if missing
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'form_submissions' AND column_name = 'form_type') THEN
    ALTER TABLE public.form_submissions ADD COLUMN form_type TEXT NOT NULL DEFAULT 'brand_application';
  END IF;
  
  -- Add status if missing
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'form_submissions' AND column_name = 'status') THEN
    ALTER TABLE public.form_submissions ADD COLUMN status TEXT NOT NULL DEFAULT 'new';
  END IF;
  
  -- Add message if missing
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'form_submissions' AND column_name = 'message') THEN
    ALTER TABLE public.form_submissions ADD COLUMN message TEXT;
  END IF;
  
  -- Add source_page if missing
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'form_submissions' AND column_name = 'source_page') THEN
    ALTER TABLE public.form_submissions ADD COLUMN source_page TEXT;
  END IF;
  
  -- Add submitted_at if missing
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'form_submissions' AND column_name = 'submitted_at') THEN
    ALTER TABLE public.form_submissions ADD COLUMN submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW();
  END IF;
  
  -- Add payload if missing
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'form_submissions' AND column_name = 'payload') THEN
    ALTER TABLE public.form_submissions ADD COLUMN payload JSONB;
  END IF;
  
  -- Add created_at if missing
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_schema = 'public' AND table_name = 'form_submissions' AND column_name = 'created_at') THEN
    ALTER TABLE public.form_submissions ADD COLUMN created_at TIMESTAMPTZ NOT NULL DEFAULT NOW();
  END IF;
END $$;

-- Step 4: Create indexes
CREATE INDEX IF NOT EXISTS idx_form_submissions_submitted_at ON public.form_submissions(submitted_at DESC);
CREATE INDEX IF NOT EXISTS idx_form_submissions_status ON public.form_submissions(status);
CREATE INDEX IF NOT EXISTS idx_form_submissions_form_type ON public.form_submissions(form_type);

-- Step 5: Enable RLS and create policies
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Service role can manage form_submissions" ON public.form_submissions;
CREATE POLICY "Service role can manage form_submissions"
  ON public.form_submissions
  FOR ALL
  USING (auth.role() = 'service_role');

-- Step 6: Refresh schema cache (CRITICAL - must wait 10-15 seconds after this)
NOTIFY pgrst, 'reload schema';

-- You should see a success message. Wait 10-15 seconds before testing your form!

