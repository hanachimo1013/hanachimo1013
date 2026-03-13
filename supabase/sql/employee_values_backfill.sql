-- Backfill employee_values totals from employees (idempotent)
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
