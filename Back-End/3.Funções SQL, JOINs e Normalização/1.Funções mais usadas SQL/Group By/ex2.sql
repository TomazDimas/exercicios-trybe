SELECT * FROM customer;

SELECT store_id, active, COUNT(*)
FROM customer
GROUP BY store_id, active;