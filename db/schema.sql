DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id integer NOT NULL auto_increment PRIMARY KEY,
    burger_name varchar(40) NOT NULL,
    devoured boolean NOT NULL DEFAULT 0
);