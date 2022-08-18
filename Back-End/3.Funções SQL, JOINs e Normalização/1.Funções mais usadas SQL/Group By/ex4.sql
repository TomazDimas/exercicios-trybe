SELECT * FROM address;

SELECT district, COUNT(*)
FROM address
GROUP BY district
ORDER BY COUNT(*) DESC;