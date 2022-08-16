SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;

SELECT c.customer_id, c.first_name, c.email, a.address_id, a.address
FROM sakila.customer c
INNER JOIN sakila.address a
ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;