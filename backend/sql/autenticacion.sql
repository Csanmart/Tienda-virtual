CREATE DATABASE autenticacion

USE autenticacion


CREATE TABLE usuarios(
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(455) NOT NULL,
    email VARCHAR(455) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    admin BOOLEAN DEFAULT FALSE,
    PRIMARY KEY(id)
);





