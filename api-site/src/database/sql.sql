-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* para workbench - local - desenvolvimento */

CREATE DATABASE Mystory;

USE Mystory;

CREATE TABLE personagem (
	idpersonagem INT PRIMARY KEY AUTO_INCREMENT,
    nomePersonagem varchar(50)
)auto_increment=1;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
    fk_personagem int,
    foreign key (fk_personagem) references personagem(idpersonagem)
)auto_increment=100;
