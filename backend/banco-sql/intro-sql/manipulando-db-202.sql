# create database livraria;
# create table livraria.livros (
# 	id int primary key auto_increment,
#  	titulo varchar(50) not null,
#   	paginas int,
#   	ano_lancamento int,
#   	vendas int
# );
# insert into livraria.livros (titulo, paginas, ano_lancamento, vendas) values
# ('Aventura 1', 500, 2022, 2000),
# ('Aventura 2', 300, 2022, 2000),
# ('Terror 1', 600, 2002, 2000),
# ('Ciencia 1', 100, 2022, 2000);

-- 1 - todos os livros cadastrados na livraria
select
  titulo
from
  livros;

-- 2 - quantidade de livros cadastrados
select
  count(titulo)
from
  livros;

# insert into livraria.livros (titulo, paginas, ano_lancamento, vendas) values
# ('Mais um livro', 100, 2000, 3000);
-- 3 - retornar todos os livros ordenados por nº de paginas de forma decrescente
select
  titulo
from
  livros
order by
  titulo desc;

-- 4 - lista dos 3 livros mais vendidos
select
  titulo,
  vendas
from
  livros
order by
  vendas desc
limit
  3;

-- 5 - retornar 3 livros ignorado os 2 primeiros resultados
select titulo, id from livros limit 3 offset 2;

-- (bônus) retornar somente os livros que contenham o número de páginas cadastrado.
# insert into livraria.livros (titulo, paginas, ano_lancamento, vendas) values
# ('Oto', null, 240, 5000);
select * from livros where paginas is not null or
paginas not like '' or
paginas > 0 or
paginas <> '' or
paginas != '';
