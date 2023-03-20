-- strings
select UCASE(username) from transactions;

-- 
select * from transactions;

-- conversão para centavos -> 2 decimais depois da virgula

select FORMAT(100000 / 100, 2); -- 1,000.00
select 3000 * 100; -- 300000
select FORMAT(3000 * 100, 2); -- 300,000.00

-- select operações math
-- arredondar para o mais próximo
select ROUND(10.8); -- 11
select ROUND(7.1); -- 7
select ROUND(7.5); -- 8

-- arredondar pra cima
SELECT CEIL(10.8)
SELECT CEIL(7.2)

-- arredondar para baixo
SELECT FLOOR(10.8)
SELECT FLOOR(7.2)

-- potencia 
SELECT POW(4, 2)
SELECT POW(3, 3)
SELECT POW(5, 3)
SELECT POW(5, 0)
SELECT POW(5, 1/3)
SELECT POWER(4, 2)

-- raiz quadrada
SELECT SQRT(100)
SELECT SQRT(25)

-- aleatório
SELECT RAND()

-- Contar a quantidade total de registros
SELECT COUNT(id) FROM fintech.transactions

-- média dos valores na fintech
SELECT AVG(amount) FROM transactions
SELECT SUM(amount) / COUNT(id) FROM transactions

-- valores MIN e MAX
SELECT MIN(amount) FROM transactions

-- Soma do valor total no caixa da fintech
SELECT FORMAT(SUM(amount) / 100, 2) FROM transactions

select distinct username from transactions; -- ordem que aparece no db
select username from transactions group by username; -- criando grupo com os nomes, não precisa de distinct, ordem alfabterica desc
select username from transactions where username = 'bojack.horseman' group by username;
select count(username) from transactions where username = 'bojack.horseman' group by username;
select username, count(type) from transactions group by username; -- type tem mais de um ele, valor não agregado

-- mais do course

select UCASE('deu bom'); -- DEU BOM

-- 
select LCASE('deu bom'); -- deu bom

-- 
select REPLACE('deu ruim', 'ruim', 'bom'); -- deu bom

-- 
select LEFT('deu', 2); -- de

-- 
select RIGHT('deu bom', 6); -- eu bom

-- 
select CHAR_LENGTH('deu'); -- 3

-- 
select SUBSTRING('Oi, eu sou uma string', 5, 2); -- eu

-- 
select SUBSTRING('Oi, eu sou uma string', 2); -- i, eu sou uma string

-- Extraia e retorne apenas a palavra "JavaScript" da frase 'A linguagem JavaScript está entre as mais usadas'.
select SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 11); -- JavaScript

-- Utilizando uma query, encontre quantos caracteres temos em 'Uma frase qualquer'.
select CHAR_LENGTH('Uma frase qualquer'); -- 18

-- Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?'.
select REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');

-- Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.
select UCASE('trybe');

-- Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.
select LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');

