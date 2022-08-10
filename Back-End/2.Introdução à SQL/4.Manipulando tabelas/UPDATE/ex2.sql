SET SQL_SAFE_UPDATES = 0;
USE sakila;
SELECT * FROM category;
UPDATE category
SET name = 'Science Fiction'
WHERE name = 'Sci-fi';