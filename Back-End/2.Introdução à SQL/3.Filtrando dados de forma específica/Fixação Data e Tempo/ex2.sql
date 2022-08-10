USE sakila;
SELECT COUNT(*) FROM payment
WHERE payment_date BETWEEN '2005-07-01' AND '2005-08-22';