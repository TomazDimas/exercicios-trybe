USE sakila;
SELECT email FROM customer
WHERE address_id BETWEEN 172 and 176
ORDER BY email;