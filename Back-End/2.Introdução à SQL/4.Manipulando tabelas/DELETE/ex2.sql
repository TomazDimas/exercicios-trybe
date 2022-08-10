SELECT * FROM actor
WHERE first_name = 'MATTHEW';

SELECT * FROM film_actor;

DELETE FROM film_actor
WHERE actor_id IN (8, 103, 181);

DELETE FROM actor
WHERE first_name = 'MATTHEW';