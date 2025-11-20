-- Quick Fix: Add the 'phone' column to form_submissions
-- Run this in your Supabase SQL Editor

-- Add phone column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'form_submissions' 
    AND column_name = 'phone'
  ) THEN
    ALTER TABLE public.form_submissions ADD COLUMN phone TEXT;
    RAISE NOTICE 'Added phone column to form_submissions';
  ELSE
    RAISE NOTICE 'phone column already exists';
  END IF;
END $$;

-- Refresh the schema cache so PostgREST recognizes the new column
NOTIFY pgrst, 'reload schema';

-- Wait 10-15 seconds after running this before testing your form!

