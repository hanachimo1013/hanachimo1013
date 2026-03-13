-- Enforce one row per employee in employee_values (overwrite latest)

-- Remove duplicates, keep the latest by effective_date/created_at/id
with ranked as (
  select
    id,
    row_number() over (
      partition by employee_name, employee_designation
      order by effective_date desc, created_at desc, id desc
    ) as rn
  from public.employee_values
)
delete from public.employee_values
where id in (select id from ranked where rn > 1);

-- Add unique constraint on employee_name + employee_designation
do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'employee_values_employee_unique'
      and conrelid = 'public.employee_values'::regclass
  ) then
    alter table public.employee_values
      add constraint employee_values_employee_unique unique (employee_name, employee_designation);
  end if;
end $$;
