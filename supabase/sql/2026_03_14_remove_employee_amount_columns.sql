-- Remove redundant amount columns from employees
-- Keep only ID numbers (sss_number, pagibig_number, philhealth_number)

alter table public.employees
  drop column if exists sss,
  drop column if exists pagibig,
  drop column if exists philhealth,
  drop column if exists eeshare,
  drop column if exists ershare;
