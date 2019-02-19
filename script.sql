drop database if exists soccermatch;
create database soccermatch;
use soccermatch;
create table team(
id_team int(255) primary key not null,
nombre varchar(10000)
);
create table player(
id_player int(255) primary key,
nombre varchar(10000),
id_team int(255),
FOREIGN KEY (id_team) REFERENCES team(id_team)
);

create table partidos(
id_partido int(255) primary key,
id_EquipoLocal int(255),
id_Equipovisitante int(255),
golesLocal int(255),
golesVisit int(255),
FOREIGN KEY (id_EquipoLocal) REFERENCES team(id_team),
FOREIGN KEY (id_Equipovisitante) REFERENCES team(id_team)
);



select * from player;