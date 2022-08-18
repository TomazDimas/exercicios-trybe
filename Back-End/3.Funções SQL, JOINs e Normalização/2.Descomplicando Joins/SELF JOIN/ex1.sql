SELECT * FROM hr.employees;

SELECT CONCAT(e.first_name, ' ', e.last_name) AS 'Funcionário', CONCAT(m.first_name, ' ', m.last_name) AS 'Gerente'
FROM hr.employees AS e
JOIN hr.employees AS m
ON e.manager_id = m.employee_id
WHERE e.department_id <> m.department_id;