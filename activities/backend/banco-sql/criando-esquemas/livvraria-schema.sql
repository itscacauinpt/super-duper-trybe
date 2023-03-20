create database livraria;
create table livraria.livros (
	id int primary key auto_increment,
 	titulo varchar(50) not null,
  	paginas int,
  	ano_lancamento int,
  	vendas int
);
insert into livraria.livros (titulo, paginas, ano_lancamento, vendas) values
('Aventura 1', 500, 2022, 2000),
('Aventura 2', 300, 2022, 2000),
('Terror 1', 600, 2002, 2000),
('Ciencia 1', 100, 2022, 2000);



