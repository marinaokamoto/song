create database IF NOT EXISTS song;

USE SONG;

CREATE TABLE IF NOT EXISTS musica (
    id INT PRIMARY KEY AUTO_INCREMENT,
    musica VARCHAR(100) NOT NULL,
    artista VARCHAR(100) NOT NULL,
    album VARCHAR(100) NOT NULL,
    genero VARCHAR(150) NOT NULL,
    ano INT NOT NULL
);

SELECT * FROM musica;


CREATE USER 'songAPI'@'localhost' IDENTIFIED BY 'senhaBanco';

GRANT SELECT, INSERT, UPDATE, DELETE
ON song.*
TO 'songAPI'@'localhost';

SHOW GRANTS FOR 'songAPI'@'localhost';
