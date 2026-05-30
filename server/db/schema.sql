create table resumes (
  id uuid primary key default gen_random_uuid(),

  name text,
  email text,
  phone text,

  linkedin_url text,
  github_url text,

  education jsonb,
  work_experience jsonb,
  skills jsonb,
  certifications jsonb,

  created_at timestamp default now()
);