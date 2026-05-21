# Persona Forge Phase 4

This is a free MVP starter for a real customer-facing personality growth web app.

## What this version includes
- Next.js app structure
- Supabase-ready auth flow
- Personality test before account entry
- Free signup/login experience
- Dashboard starter with missions, streaks, and progress UI
- Starter API routes for onboarding, missions, AI coach, and reflection analysis
- Supabase SQL schema with RLS policies

## Setup
1. Create a Supabase project.
2. Copy `.env.example` to `.env.local` and add your keys.
3. Run the SQL in `supabase/schema.sql`.
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the app:
   ```bash
   npm run dev
   ```
6. Open `http://localhost:3000`.

## Important notes
- This version intentionally does **not** include payments because the product is free for now.
- The auth page places the personality test before signup/login so every new user begins with structured onboarding.
- The API routes return starter responses and should be connected to real Supabase writes and AI calls next.

## Recommended next implementation work
- Save onboarding data into `profiles`, `personality_assessments`, and `user_skill_scores`.
- Protect the dashboard with server-side auth checks.
- Generate daily missions per user from onboarding data.
- Connect `/api/coach` to a real LLM provider.
- Add streak updates and reflection persistence.
