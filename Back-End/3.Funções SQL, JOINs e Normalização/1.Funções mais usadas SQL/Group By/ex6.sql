SELECT rating, SUM(replacement_cost) AS 'Total'
FROM sakila.film
GROUP by rating
HAVING SUM(replacement_cost) > 3950.5
ORDER BY SUM(replacement_cost) DESC;