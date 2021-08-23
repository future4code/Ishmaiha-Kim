### EXERCÍCIO 01
a. 
Uma Foreign Key (FK) é uma PRIMARY KEY (PK) de um banco de dados que foi inserida 
em outro banco de dados dominante. 

b. 
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
)

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES ("123", "Thats all folks", 9.27, "abc")

c. 
A query retorna uma mensagem de erro dizendo que a chave estrangeira não foi 
encontrada. Isso acontece porque o dado passado sobre a chave estrangeira não
corresponde à chave original do banco de dados que possui essa foreign key.

d. 
ALTER TABLE Movies
DROP COLUMN rate;

e.
Não foi possível deletar o filme pela avaliação pois a coluna que criava
a relação entre as 2 entidades inexiste

### EXERCÍCIO 02
a.
Essa tabela foi criada pra gerar um relacionamento entre duas entidades com
múltiplas cardinalidades. Para isso, as Primary Keys das entidades (Actor, Movies) foram acopladas como Foreign Keys na entidade MovieCast.

b.
INSERT INTO MovieCast (movie_id, actor_id)
VALUES ("001", "003"), 
("002", "004"), 
("004", "005");

c. 
A query retorna uma mensagem de erro dizendo que a chave estrangeira não foi 
encontrada. Isso acontece porque o dado passado sobre a chave estrangeira não
corresponde à chave original do banco de dados que possui essa foreign key.

d. 
Não foi possível deletar o filme pela avaliação pois a coluna que criava
a relação entre as 2 entidades inexiste

### EXERCÍCIO 03
a. 
A query junta todos os atributos da entidade "Movie" com os atributos da entidade
"Rating" em que há relações através de "id`s" por meio das chaves primária e secundária

b. 
SELECT Movies.id as id_movie, Movies.rate as rating FROM Movies
JOIN Rating id_movie ON rating = movie_id;
A query seria essa. No entanto, não há mais coluna de "rate" pois foi
deletado no exercício 1) c). 