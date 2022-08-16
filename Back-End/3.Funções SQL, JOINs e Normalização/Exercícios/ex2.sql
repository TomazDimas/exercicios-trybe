SELECT m.title, b.domestic_sales, b.international_sales
FROM movies m
JOIN box_office b
ON m.id = b.movie_id
WHERE b.domestic_sales < b.international_sales;