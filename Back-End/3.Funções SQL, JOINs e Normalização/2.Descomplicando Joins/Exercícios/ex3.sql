SELECT m.title, b.rating
FROM movies m
JOIN box_office b
ON m.id = b.movie_id
ORDER BY b.rating DESC;