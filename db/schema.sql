drop database if exists burgers_db;
create database burgers_db;
use burgers_db;

CREATE TABLE burgers 
(
    id int (50)  NOT NULL AUTO_INCREMENT,
    burger_name varchar (100) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);
