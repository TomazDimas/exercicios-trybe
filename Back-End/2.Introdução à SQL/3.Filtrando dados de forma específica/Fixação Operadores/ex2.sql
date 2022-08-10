USE sakila;
SELECT first_name FROM customer
WHERE active = 0
AND store_id = 2
AND first_name NOT LIKE 'KENNETH'
ORDER BY first_name;