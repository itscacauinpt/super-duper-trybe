# drop database `intro_sql_20.1`;
# # usando a table filem, database intro_sql_20.1
# drop table
#   first_step;

# insert into
#   filme (descricao, ano_lancamento, notas)
# values
#   ('outro filme egau', 2000, 5);

select 'Cacau' as name, 'Souza' as soobrenome, '21' as idade;
select * from city;
select * from city limit 10;
select first_name, last_name from customer limit 10;
select * from rental limit 10;
select title, description, release_year from film;

# CONCAT('') Vamos imaginar que é necessário criar um relatório com infos;
select * from actor;
select concat(first_name, ' ', last_name) as nome_completo from actor;
select concat(title, ' - ', release_year) as lançamento_do_filme from film;
select concat(title, ' - ', rating) as classificacao from film;
select concat(address, ', ', district) as endereco from address;

# DISTINC sem dados repetidos;
select distinct first_name from actor;

-- conte a quantidade de registros;
select count(distinct first_name) from actor;

-- limitar consultas
select last_name from actor limit 14;

-- limitar usando offset, achar id 35
select * from actor limit 5 offset 34;

-- ascendente - descendente
select first_name, last_name from actor order by first_name;
select * from actor order by first_name desc;
select * from actor order by first_name asc;

-- bob ganhou o sorteio
select first_name from actor order by rand() limit 1;

-- dinamica
-- todos os livros
