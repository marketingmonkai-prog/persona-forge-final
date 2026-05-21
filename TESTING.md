# Testing Steps

1. Create a Supabase project.
2. Copy `.env.example` to `.env.local`.
3. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`.
4. Run `supabase/schema.sql` in the SQL editor.
5. Install dependencies with `npm install`.
6. Run `npm run dev`.
7. Open `/auth` and complete the personality test first.
8. Sign up with a test email and password.
9. Confirm the onboarding payload is sent to `/api/onboarding`.
10. Open `/dashboard` to see free missions and progress UI.
