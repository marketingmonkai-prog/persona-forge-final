create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key,
  email text unique,
  display_name text,
  role_type text,
  onboarding_complete boolean default false,
  pace_mode text,
  created_at timestamptz default now()
);

create table if not exists public.personality_assessments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade,
  current_identity text,
  fear_pattern text,
  desired_goal text,
  selected_traits text[],
  pace_mode text,
  confidence_score int,
  swot_summary jsonb,
  created_at timestamptz default now()
);

create table if not exists public.user_skill_scores (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade,
  skill_name text,
  score int default 0,
  level int default 1,
  updated_at timestamptz default now()
);

create table if not exists public.user_missions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade,
  title text not null,
  description text,
  xp_reward int default 0,
  status text default 'pending',
  assigned_for_date date,
  confidence_before int,
  confidence_after int,
  created_at timestamptz default now()
);

create table if not exists public.reflections (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade,
  mission_id uuid references public.user_missions(id) on delete cascade,
  reflection_text text,
  mood_rating int,
  coach_summary text,
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;
alter table public.personality_assessments enable row level security;
alter table public.user_skill_scores enable row level security;
alter table public.user_missions enable row level security;
alter table public.reflections enable row level security;

create policy "users can view own profile" on public.profiles for select using (auth.uid() = id);
create policy "users can update own profile" on public.profiles for update using (auth.uid() = id);
create policy "users can insert own profile" on public.profiles for insert with check (auth.uid() = id);

create policy "users can manage own assessments" on public.personality_assessments for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "users can manage own skills" on public.user_skill_scores for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "users can manage own missions" on public.user_missions for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "users can manage own reflections" on public.reflections for all using (auth.uid() = user_id) with check (auth.uid() = user_id);


create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, email, display_name, role_type, onboarding_complete, pace_mode)
  values (new.id, new.email, coalesce(new.raw_user_meta_data ->> 'display_name', new.email), 'customer', false, 'Daily')
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();
