USE sakila;
SELECT * FROM film;
UPDATE film
SET rental_rate = (
CASE WHEN length BETWEEN 0 AND 100 THEN 10
	ELSE 20
END);