-- Fix: Add 'company' column to form_submissions if it doesn't exist
-- Run this in your Supabase SQL Editor if you're getting the "Could not find the 'company' column" error

-- Add company column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'form_submissions' 
    AND column_name = 'company'
  ) THEN
    ALTER TABLE public.form_submissions ADD COLUMN company TEXT;
    RAISE NOTICE 'Added company column to form_submissions';
  ELSE
    RAISE NOTICE 'company column already exists';
  END IF;
END $$;

-- Refresh the schema cache so PostgREST recognizes the new column
NOTIFY pgrst, 'reload schema';

