-- Complete Fix: Add all missing columns to form_submissions table
-- Run this in your Supabase SQL Editor to ensure all columns exist

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
    RAISE NOTICE 'Added company column';
  END IF;
END $$;

-- Add form_type column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'form_submissions' 
    AND column_name = 'form_type'
  ) THEN
    ALTER TABLE public.form_submissions ADD COLUMN form_type TEXT NOT NULL DEFAULT 'brand_application';
    RAISE NOTICE 'Added form_type column';
  END IF;
END $$;

-- Add status column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'form_submissions' 
    AND column_name = 'status'
  ) THEN
    ALTER TABLE public.form_submissions ADD COLUMN status TEXT NOT NULL DEFAULT 'new';
    RAISE NOTICE 'Added status column';
  END IF;
END $$;

-- Add message column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'form_submissions' 
    AND column_name = 'message'
  ) THEN
    ALTER TABLE public.form_submissions ADD COLUMN message TEXT;
    RAISE NOTICE 'Added message column';
  END IF;
END $$;

-- Add source_page column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'form_submissions' 
    AND column_name = 'source_page'
  ) THEN
    ALTER TABLE public.form_submissions ADD COLUMN source_page TEXT;
    RAISE NOTICE 'Added source_page column';
  END IF;
END $$;

-- Add submitted_at column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'form_submissions' 
    AND column_name = 'submitted_at'
  ) THEN
    ALTER TABLE public.form_submissions ADD COLUMN submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW();
    RAISE NOTICE 'Added submitted_at column';
  END IF;
END $$;

-- Add payload column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'form_submissions' 
    AND column_name = 'payload'
  ) THEN
    ALTER TABLE public.form_submissions ADD COLUMN payload JSONB;
    RAISE NOTICE 'Added payload column';
  END IF;
END $$;

-- Add created_at column if it doesn't exist
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'form_submissions' 
    AND column_name = 'created_at'
  ) THEN
    ALTER TABLE public.form_submissions ADD COLUMN created_at TIMESTAMPTZ NOT NULL DEFAULT NOW();
    RAISE NOTICE 'Added created_at column';
  END IF;
END $$;

-- Refresh the schema cache so PostgREST recognizes all new columns
NOTIFY pgrst, 'reload schema';

