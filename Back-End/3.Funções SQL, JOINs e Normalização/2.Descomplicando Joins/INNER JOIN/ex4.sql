SELECT * FROM sakila.address;
SELECT * FROM sakila.customer;

SELECT c.first_name, c.email, c.address_id, a.address, a.district
FROM sakila.address a
INNER JOIN sakila.customer c
WHERE
	a.district = 'California' AND
	c.first_name LIKE '%rene%';