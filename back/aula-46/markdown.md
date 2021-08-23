
### EXERCÍCIO 1
ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR (255);

ALTER TABLE Actor ADD type VARCHAR (255) DEFAULT "NotDirector";

a. Deleta a coluna que contém os salários na tabela de atores
b. Altera o nome da coluna "gender" para "sex" que receba uma string de até 6 caracteres
c. Altera a coluna "gender" para que receba uma string de até 255 caracteres.
d. ALTER TABLE Actor CHANGE gender gender VARCHAR (100);

### EXERCÍCIO 2
a. 
UPDATE Actor
SET name = "BOZO", birthday_date = "1708-03-19"
WHERE id = "003";

b.
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";

c. 
UPDATE Actor
SET name = "GOKU", birthday_date = "2000-05-23", salary = 300000, gender = "male"
WHERE id = "005";

d. 
UPDATE Actor
SET name = "Hakuna"
WHERE id = "32434";
Ao tentar atualizar usando um WHERE cujo valor inexiste, 
o banco de dados vai rodar sem mudar nada. 

### EXERCÍCIO 3
a.
DELETE FROM Actor WHERE name = "Fernanda Montenegro";

b. 
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

### EXERCÍCIO 4
SELECT COUNT (*) FROM Actor;

a. 
SELECT MAX(salary) FROM Actor;

b.
SELECT MIN (salary) FROM Actor WHERE gender = "female";

c. 
SELECT COUNT (*) FROM Actor WHERE gender = "female";

d.
SELECT SUM (salary) FROM Actor;

### EXERCÍCIO 5
a.
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
A função retornou o número de atores e atrizes de acordo com o gênero da tabela de atores.

b. 
SELECT id, name FROM Actor
ORDER BY name DESC;

c. 
SELECT * FROM Actor
ORDER BY salary;

d.
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

e.
SELECT AVG (salary), gender FROM Actor
ORDER BY gender;

### EXERCÍCIO 6
a.
ALTER TABLE Movies
ADD playing_limit_date DATE;

b.
ALTER TABLE Movies
CHANGE rate rate FLOAT;

c.
UPDATE Movies 
SET playing_limit_date = "2015-03-02"
WHERE title = "Doce de mãe";

UPDATE Movies 
SET playing_limit_date = "2021-10-15"
WHERE title = "Cidade de Deus";

d.
DELETE FROM Movies
WHERE id = "003";

UPDATE Movies
SET title = "LALALAND"
WHERE id = "003";
O comando rodou a query sem nenhum erro porém sem nenhuma alteração também. 

### EXERCÍCIO 7
a.
SELECT COUNT(*) FROM Movies
WHERE rate > 7.5;

b.
SELECT AVG(rate) FROM Movies;

c.
UPDATE Movies 
SET playing_limit_date = "2023-11-18"
WHERE id = "001";
SELECT COUNT (*) FROM Movies
WHERE playing_limit_date > CURDATE(); 

d.
SELECT COUNT (*) FROM Movies
WHERE release_date > CURDATE();

e.
SELECT MAX(rate) FROM Movies;

f.
SELECT MIN(rate) FROM Movies;

### EXERCÍCIO 8
a.
SELECT * FROM Movies
ORDER BY title ASC;

b.
SELECT * FROM Movies
ORDER BY title DESC
LIMIT 5;

c.
SELECT * FROM Movies
WHERE release_date < CURDATE ()
ORDER BY release_date ASC
LIMIT 3;

d.
SELECT * FROM Movies
ORDER BY rate ASC
LIMIT 3;