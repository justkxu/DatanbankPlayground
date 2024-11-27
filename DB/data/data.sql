CREATE DATABASE IF NOT EXISTS test;
USE test;
create table IF NOT EXISTS Klasse
(
    Id INTEGER primary key AUTO_INCREMENT,
    Name     TEXT not null
);
CREATE TABLE IF NOT EXISTS Schueler
(
    ID INTEGER primary key AUTO_INCREMENT,
    Vorname     TEXT NOT NULL,
    Nachname    TEXT NOT NULL,
    Klasse_Id      INTEGER references Klasse(Id));


INSERT INTO Klasse (Name) VALUES ('1A');
INSERT INTO Klasse (Name) VALUES ('1b');
INSERT INTO Klasse (Name) VALUES ('2a');
INSERT INTO Klasse (Name) VALUES ('2b');
INSERT INTO Schueler (Vorname, Nachname, Klasse_Id) VALUES ('Max', 'Mustermann', 1);
INSERT INTO Schueler (Vorname, Nachname, Klasse_Id) VALUES ('Maxime', 'Musterfrau', 2);
INSERT INTO Schueler (Vorname, Nachname, Klasse_Id) VALUES ('Dieter', 'Mueller', 3);
INSERT INTO Schueler (Vorname, Nachname, Klasse_Id) VALUES ('Peter', 'Schneider', 4);