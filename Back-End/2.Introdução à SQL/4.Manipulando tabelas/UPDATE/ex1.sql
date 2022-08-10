SET SQL_SAFE_UPDATES = 0;
USE sakila;
SELECT * FROM actor;
UPDATE actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';