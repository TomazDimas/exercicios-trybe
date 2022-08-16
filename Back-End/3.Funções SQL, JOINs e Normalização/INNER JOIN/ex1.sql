SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;

SELECT a.actor_id, a.first_name, f.film_id
FROM sakila.actor a
INNER JOIN sakila.film_actor f
ON a.actor_id = f.actor_id;