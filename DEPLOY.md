# Deploy Persona Forge to Vercel

## 1. Prepare Supabase
1. Create a Supabase project.
2. Open the SQL editor.
3. Run the SQL from `supabase/schema.sql`.
4. In Supabase Authentication, enable Email/Password provider.
5. Copy these values from Project Settings:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`

## 2. Push code to GitHub
1. Extract the project.
2. Create a new GitHub repository.
3. Push the files.

## 3. Deploy on Vercel
1. Sign in to Vercel with GitHub.
2. Click **Add New Project**.
3. Import the GitHub repository.
4. Vercel should detect Next.js automatically.
5. Add these environment variables in Project Settings:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
6. Click **Deploy**.

## 4. Test after deploy
1. Open your Vercel URL.
2. Go to `/auth`.
3. Complete the personality test.
4. Sign up with a new test user.
5. Log in and open `/dashboard`.

## 5. Important
- This project is free-only right now, so no billing setup is required.
- The public website link will only exist after you deploy it to your own Vercel account.
- I cannot directly create a live public URL from inside this chat because I do not have access to your Vercel or GitHub account.
