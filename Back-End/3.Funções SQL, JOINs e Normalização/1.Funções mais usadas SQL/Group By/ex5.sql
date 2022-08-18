SELECT rating, AVG(length) AS 'Média de Duração'
FROM sakila.film
GROUP BY rating
HAVING AVG(length) >= 115 AND AVG(length) <= 121.5
ORDER BY AVG(length) DESC;