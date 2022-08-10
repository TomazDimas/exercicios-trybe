USE sakila;
SELECT count(*) FROM customer
WHERE store_id = 1
AND active = 1;