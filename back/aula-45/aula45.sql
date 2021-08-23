CREATE TABLE Actor(  
    id VARCHAR (255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birthday_date DATE NOT NULL,
    gender VARCHAR (6) NOT NULL 
);

INSERT INTO Actor (id, name, salary, birthday_date, gender) VALUES("001", "Tony Ramos", 400000, "1948-08-25", "male");
INSERT INTO Actor (id, name, salary, birthday_date, gender) VALUES("002", "Glória Pires", 1200000, "1963-08-23", "female");
SELECT * FROM Actor WHERE gender = "female";
SELECT salary FROM Actor WHERE name = "Tony Ramos";
SELECT * FROM Actor WHERE gender = "invalid";
SELECT id, name, salary FROM Actor WHERE salary <= 500000;
SELECT id, name FROM Actor WHERE id = "002";
SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 350000;
SELECT * FROM Actor WHERE name NOT LIKE "A%"  AND salary > 300000;
SELECT * FROM Actor WHERE name LIKE "%A%" OR name LIKE "%J%";
SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%";
SELECT * FROM Actor WHERE 
(name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") 
AND salary BETWEEN 350000 AND 900000;

--5
CREATE TABLE Movies(  
    id VARCHAR (255) PRIMARY KEY,
    title VARCHAR (255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rate INT NOT NULL 
);

INSERT INTO Movies (id, title, synopsis, release_date, rate) 
VALUES("001", 
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
 Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", 
"2006-01-06", 
7);
INSERT INTO Movies (id, title, synopsis, release_date, rate) 
VALUES("002", 
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. 
A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, 
empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", 
"2012-12-27", 
10);
INSERT INTO Movies (id, title, synopsis, release_date, rate) 
VALUES("003", 
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, 
que só quer saber de farras e jogatina nas boates. 
A vida de abusos acaba por acarretar sua morte precoce.", 
"2017-11-02", 
8);
INSERT INTO Movies (id, title, synopsis, release_date, rate) 
VALUES("004", 
"Cidade de Deus",
"Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. 
Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio. 
Amedrontado com a possibilidade de se tornar um bandido, 
Buscapé é salvo de seu destino por causa de seu talento como fotógrafo, 
o qual permite que siga carreira na profissão. 
É por meio de seu olhar atrás da câmera que ele analisa o dia a dia da favela em que vive, 
onde a violência aparenta ser infinita.",
"2002-08-30", 
9);

--6
SELECT id, title, rate FROM Movies WHERE id = "001";

SELECT * FROM Movies WHERE title = "Cidade de Deus";

SELECT id, title, synopsis FROM Movies WHERE rate >= 7;

--7
SELECT * FROM Movies WHERE title LIKE "%vida%";

SELECT * FROM Movies WHERE title LIKE "%TEMPO DE BUSCA%" OR synopsis LIKE "%TEMPO DE BUSCA%";

SELECT * FROM Movies WHERE release_date < "2002-08-29";

SELECT * FROM Movies WHERE 
(title LIKE "%TEMPO DE BUSCA%" OR synopsis LIKE "%TEMPO DE BUSCA%")
AND rate > 7;