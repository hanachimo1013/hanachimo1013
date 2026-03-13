-- Employee schema update (non-breaking)
-- Adds employee identity fields and history table for contribution values.

-- 1) Add new columns to employees (keep existing columns intact)
alter table public.employees
  add column if not exists sss_number text,
  add column if not exists pagibig_number text,
  add column if not exists philhealth_number text,
  add column if not exists salary_per_day numeric(10,2) default 0,
  add column if not exists status text default 'employed';

-- 2) Ensure designation has a value so FK can be reliable
update public.employees
set designation = ''
where designation is null;

alter table public.employees
  alter column designation set not null;

-- 3) Unique constraint for name + designation (FK target)
do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'employees_name_designation_unique'
      and conrelid = 'public.employees'::regclass
  ) then
    alter table public.employees
      add constraint employees_name_designation_unique unique (name, designation);
  end if;
end $$;

-- 4) Employee values history table (many records per employee)
create table if not exists public.employee_values (
  id serial primary key,
  employee_name varchar(255) not null,
  employee_designation varchar(255) not null,
  effective_date date not null default current_date,
  ee_total numeric(10,2) default 0,
  er_total numeric(10,2) default 0,
  sss_ee numeric(10,2) default 0,
  sss_er numeric(10,2) default 0,
  pagibig_ee numeric(10,2) default 0,
  pagibig_er numeric(10,2) default 0,
  philhealth_ee numeric(10,2) default 0,
  philhealth_er numeric(10,2) default 0,
  created_at timestamp without time zone default now(),
  constraint employee_values_employee_fk
    foreign key (employee_name, employee_designation)
    references public.employees (name, designation)
    on update cascade
    on delete restrict
);

create index if not exists employee_values_employee_idx
  on public.employee_values (employee_name, employee_designation);

-- 5) Backfill totals from existing employees table
insert into public.employee_values (
  employee_name,
  employee_designation,
  effective_date,
  ee_total,
  er_total
)
select
  e.name,
  e.designation,
  current_date,
  e.eeshare,
  e.ershare
from public.employees e
where not exists (
  select 1
  from public.employee_values v
  where v.employee_name = e.name
    and v.employee_designation = e.designation
);
