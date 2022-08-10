USE sakila;
SELECT * FROM customer;
SELECT * FROM actor;
INSERT INTO actor (first_name, last_name)
	SELECT first_name, last_name FROM customer LIMIT 5;
SELECT * FROM actor;