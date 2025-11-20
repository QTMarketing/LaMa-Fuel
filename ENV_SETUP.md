# Environment Variables Setup Guide

## Required Supabase Environment Variables

Add these to your `.env.local` file in the project root:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

## How to Get Your Supabase Credentials

1. **Go to your Supabase project dashboard**
   - Visit [supabase.com](https://supabase.com) and sign in
   - Select your project

2. **Get your Project URL**
   - Go to **Settings** → **API**
   - Copy the **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - This is your `NEXT_PUBLIC_SUPABASE_URL`

3. **Get your API Keys**
   - In the same **Settings** → **API** page, you'll see:
     - **anon/public key** → Use for `NEXT_PUBLIC_SUPABASE_ANON_KEY`
     - **service_role key** → Use for `SUPABASE_SERVICE_ROLE_KEY` ⚠️ **Keep this secret!**

## Important Notes

- **Service Role Key**: This key bypasses Row Level Security (RLS) and should only be used in server-side code (API routes). Never expose it in client-side code.
- **Anon Key**: This is safe to use in client-side code, but has limited permissions based on your RLS policies.
- **For API routes**: Use `SUPABASE_SERVICE_ROLE_KEY` (recommended) or fallback to `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Troubleshooting "Invalid API key" Error

If you're getting an "Invalid API key" error:

1. **Check your `.env.local` file exists** in the project root
2. **Verify the keys are correct**:
   - No extra spaces or quotes
   - Full key copied (they're very long)
   - No line breaks in the middle of the key
3. **Restart your dev server** after adding/updating environment variables:
   ```bash
   # Stop the server (Ctrl+C) and restart
   npm run dev
   ```
4. **Check the key format**:
   - Service role keys start with `eyJ...` (JWT format)
   - They're typically 200+ characters long
5. **Verify in Supabase Dashboard**:
   - Go to Settings → API
   - Make sure you copied the correct key (service_role, not anon)

## Example `.env.local` File

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNjIzOTAyMiwiZXhwIjoxOTMxODE1MDIyfQ.example
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjE2MjM5MDIyLCJleHAiOjE5MzE4MTUwMjJ9.example
```

**Note**: The keys above are examples. Use your actual keys from Supabase.

## Security Best Practices

- ✅ Never commit `.env.local` to git (it should be in `.gitignore`)
- ✅ Use service_role key only in server-side API routes
- ✅ Use anon key for client-side operations
- ✅ Rotate keys if they're accidentally exposed
- ✅ Use different keys for development and production

