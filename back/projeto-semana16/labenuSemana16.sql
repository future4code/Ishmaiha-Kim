CREATE TABLE labenuSemana16(  
    id INT PRIMARY KEY UNIQUE AUTO_INCREMENT,
    name VARCHAR (255) NOT NULL,
    nickname VARCHAR (255) NOT NULL UNIQUE,
    email VARCHAR (255) NOT NULL UNIQUE
);

INSERT INTO labenuSemana16 (id, name, nickname, email)
VALUES 
(1, "pedro", "pe", "pedro@labenu.com"),
(2, "lucas", "l", "lucas@labenu.com"),
(3, "paulo", "pa", "pauloo@labenu.com"),
(4, "tiago", "t", "tiago@labenu.com");

SELECT * FROM labenuSemana16