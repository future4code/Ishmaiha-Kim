CREATE TABLE IF NOT EXISTS User(
        id VARCHAR(50) NOT NULL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL UNIQUE,
        age INT NULL
);
    CREATE TABLE IF NOT EXISTS Product(
        id VARCHAR(50) NOT NULL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        description VARCHAR(50) NOT NULL,
        price DECIMAL (6,2) NOT NULL,
        origin VARCHAR(255),
        destination VARCHAR(255)
);
    CREATE TABLE IF NOT EXISTS Purchase(
        id VARCHAR(50) NOT NULL PRIMARY KEY,
        quantity_itens INT,
        total_value DECIMAL(6,2) NOT NULL,
        id_user VARCHAR(50),
        id_product VARCHAR(50),
        FOREIGN KEY(id_user) REFERENCES User(id),
        FOREIGN KEY(id_product) REFERENCES Product(id)
);