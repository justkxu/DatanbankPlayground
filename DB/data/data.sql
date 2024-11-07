CREATE DATABASE IF NOT EXISTS test;
USE test;
create table IF NOT EXISTS Klasse
(
    ID INTEGER primary key AUTO_INCREMENT,
    Name     TEXT not null
);
CREATE TABLE IF NOT EXISTS Schueler
(
    ID INTEGER primary key AUTO_INCREMENT,
    Vorname     TEXT NOT NULL,
    Nachname    TEXT NOT NULL,
    Klasse      INTEGER references Klasse(ID));


INSERT INTO Klasse (Name) VALUES ('1A');
INSERT INTO Schueler (Vorname, Nachname, Klasse) VALUES ('Max', 'Mustermann', 1);