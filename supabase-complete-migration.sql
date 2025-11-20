-- Complete Supabase Migration Script for LaMa Fuel
-- Run this in your Supabase SQL Editor (Database > SQL Editor > New Query)
-- This script will create tables OR alter existing ones to ensure all columns exist

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create form_submissions table (or alter if exists)
CREATE TABLE IF NOT EXISTS public.form_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  form_type TEXT NOT NULL DEFAULT 'brand_application',
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved')),
  message TEXT,
  source_page TEXT,
  submitted_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  payload JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

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
  END IF;
END $$;

-- Create reviews table (for admin panel)
CREATE TABLE IF NOT EXISTS public.reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_name TEXT NOT NULL,
  store_id TEXT NOT NULL,
  store_name TEXT,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL,
  date DATE NOT NULL,
  google_maps_link TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_form_submissions_submitted_at ON public.form_submissions(submitted_at DESC);
CREATE INDEX IF NOT EXISTS idx_form_submissions_status ON public.form_submissions(status);
CREATE INDEX IF NOT EXISTS idx_form_submissions_form_type ON public.form_submissions(form_type);
CREATE INDEX IF NOT EXISTS idx_reviews_date ON public.reviews(date DESC);
CREATE INDEX IF NOT EXISTS idx_reviews_store_id ON public.reviews(store_id);

-- Enable Row Level Security (RLS) - Optional but recommended
ALTER TABLE public.form_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Create policies to allow service role to access all data
-- (This allows your API routes with service role key to read/write)
DROP POLICY IF EXISTS "Service role can manage form_submissions" ON public.form_submissions;
CREATE POLICY "Service role can manage form_submissions"
  ON public.form_submissions
  FOR ALL
  USING (auth.role() = 'service_role');

DROP POLICY IF EXISTS "Service role can manage reviews" ON public.reviews;
CREATE POLICY "Service role can manage reviews"
  ON public.reviews
  FOR ALL
  USING (auth.role() = 'service_role');

-- Refresh the schema cache so PostgREST recognizes the new tables/columns
NOTIFY pgrst, 'reload schema';

