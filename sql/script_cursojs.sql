/* create database curso;
use curso;
create table aluno(
id_aluno int primary key not null auto_increment,
nome varchar(40),
senha varchar(40));

create table contato(
id_contato int primary key not null auto_increment,
email varchar(50),
telefone char(11),
id_aluno int,
foreign key (id_aluno) references aluno(id_aluno)); */

-- desc contato;
-- desc aluno;
select * from contato;
select * from aluno;








