SELECT s.title, g.name as genre 
FROM series s, genres g 
WHERE s.genre_id = g.id;

SELECT s.title as Titulo, g.name as Genero
FROM series s
INNER JOIN genres g ON s.genre_id = g.id;

SELECT CONCAT(a.first_name, ' ', a.last_name) as fullname, e.title
FROM episodes e, actor_episode ae, actors a
WHERE e.id = ae.episode_id AND a.id = ae.actor_id;

SELECT CONCAT(a.first_name, ' ', a.last_name) as nombre, e.title
FROM episodes e
INNER JOIN actor_episode ae ON e.id = ae.episode_id
INNER JOIN actors a ON a.id = ae.actor_id;

SELECT DISTINCT a.first_name, a.last_name
FROM actors a, actor_movie am, movies m
WHERE a.id = am.actor_id AND m.id = am.movie_id AND m.title LIKE 'la guerra%';

SELECT DISTINCT a.first_name, a.last_name
FROM actors a
INNER JOIN actor_movie am ON a.id = am.actor_id
INNER JOIN movies m ON m.id = am.movie_id
WHERE m.title LIKE 'la guerra%';


SELECT m.title, COALESCE(g.name, 'No tiene genero')
FROM movies m
LEFT JOIN genres g ON m.genre_id = g.id;

SELECT title, DATEDIFF(end_date, release_date) as duration 
FROM series s;

SELECT * FROM actors a WHERE LENGTH(first_name) > 6 ORDER BY first_name;

SELECT COUNT(id) from episodes;

SELECT s.title, COUNT(s2.id) as temporadas
FROM series s
INNER JOIN seasons s2 ON s2.serie_id = s.id
GROUP BY s.id;

SELECT g.name, COUNT(g.id) as "Total peliculas" 
FROM movies m
INNER JOIN genres g ON m.genre_id = g.id
GROUP BY g.id
HAVING COUNT(g.id) >= 3;














