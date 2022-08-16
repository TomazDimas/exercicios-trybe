USE sakila;

SELECT film_id, title, 
	IF(title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme') AS `Conheço?`
FROM film;