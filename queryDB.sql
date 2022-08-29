create database sylvia;

use sylvia;

create table laudo( 
id int primary key auto_increment,
tipo_droga varchar(60),
resultado varchar(20),
codigo_amostra varchar(10)
);

create table user( 
id int primary key auto_increment,
email varchar(60),
senha varchar(255)
);

create table laudp( 
id int primary key auto_increment,
codigo_amostra varchar(255),
resultado varchar(30)
);

select * from laudo;
select * from drogas;
select * from user;
