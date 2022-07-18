-- Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT.
select concat(piece, ' - ', price) from Provides
where provider = 'RBT';

-- Escreve uma query para exibir todas as informações das cinco peças com os maiores preços.
select * from Provides order by price desc limit 5;

-- Escreva uma query para exibir o nome das empresas e preço das peças com os quatro maiores preços, começando a lista a partir do 3º item.
select provider, price from Provides order by price desc limit 4 offset 2;

-- Escreva uma query para exibir todas as informações das peças que são providas pela empresa HAL. Ordene o resultado pelos preços das peças de forma decrescente.
select * from Provides where provider = 'HAL' order by price desc;

-- Escreva uma query para exibir por quantas empresas a peça 1 é provida.
select count(provider) from Provides where piece = 1;
--
--  Faça uma consulta que retorne todas as peças que começam com as letras GR.
select name from Pecas where name like 'gr%';

-- Agora, escreva uma query para mostrar todos os fornecimentos que contenham a peça com code 2. Organize o resultado por ordem alfabética de fornecedor.
select * from Fornecimentos where peca = 2 order by fornecedor;

-- Em seguida, faça uma consulta para exibir as peças, preço e fornecedor de todos os fornecimentos em que o código do fornecedor tenha a letra N.
select peca, preco, fornecedor from Fornecimentos where fornecedor like '%n%';

-- Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA). Ordene os resultados em ordem alfabética decrescente.
select * from Fornecedores where name like '%ltda' order by name desc;

-- Escreva uma query para exibir o número de empresas (fornecedores) que contém a letra F no código.
select count(code) from Fornecedores where code like '%f%';

-- Escreva uma query para exibir os fornecimentos onde as peças custam mais de R$15,00 e menos de $40,00. Ordene os resultados por ordem crescente.
select * from Fornecimentos where preco between 14 and 40 order by preco;

-- Escreva uma query para exibir o número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019.
select count(*) from Vendas where order_date between '2018-04-14' and '2019-07-30';
-- select count(*) from Vendas where date(order_date) between '2018-04-14' and '2019-07-30';

--


