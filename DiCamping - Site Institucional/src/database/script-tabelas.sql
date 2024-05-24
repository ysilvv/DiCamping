CREATE DATABASE dicamping;

USE dicamping;


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE campings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo_camping VARCHAR(255)
);

