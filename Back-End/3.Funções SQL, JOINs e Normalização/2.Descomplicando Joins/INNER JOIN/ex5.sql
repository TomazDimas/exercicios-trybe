SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;

SELECT c.first_name, COUNT(a.address)
FROM sakila.customer c
INNER JOIN sakila.address a
ON a.address_id = c.address_id
WHERE c.active = 1
GROUP BY c.customer_id
ORDER BY c.first_name DESC;