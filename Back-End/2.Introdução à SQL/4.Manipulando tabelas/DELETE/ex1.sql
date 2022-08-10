USE sakila;
SELECT * FROM actor
WHERE first_name = 'KARL';

SELECT * FROM film_actor
WHERE actor_id = 12;

DELETE FROM film_actor
WHERE actor_id = 12;

DELETE FROM actor
WHERE first_name = 'KARL';