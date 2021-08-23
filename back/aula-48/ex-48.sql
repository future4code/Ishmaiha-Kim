--1.
--a.
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);

--b.
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES ("002", "Thats all folks", 9.27, "abc");

--c. 
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES ("555", "Thats all folks", 9.27, "abc");

--d.Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating
ALTER TABLE Movies
DROP COLUMN rate; 

--e.
DELETE FROM Movies
WHERE rate = 9;

--2. 
CREATE TABLE MovieCast (
    movie_id VARCHAR(255),
    actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
--b.
INSERT INTO MovieCast (movie_id, actor_id)
VALUES ("001", "003"), 
("002", "004"), 
("004", "005");

--c.
INSERT INTO MovieCast (movie_id, actor_id)
VALUES ("12", "76");

--d.
DELETE FROM Movies
WHERE name = "Fernanda Montenegro";

--3.
SELECT * FROM Movies
INNER JOIN Rating ON Movies.id = Rating.movie_id;
SELECT Movies.id as id_movie, Movies.rate as rating FROM Movies
JOIN Rating id_movie ON rating = movie_id;