SELECT * FROM film;

SELECT AVG(rental_duration), rating
FROM film
GROUP BY rating
ORDER BY AVG(rental_duration) DESC;