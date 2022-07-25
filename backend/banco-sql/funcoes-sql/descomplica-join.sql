-- Listar usuario e pedido em uma mesma consulta (JOIN)
SELECT username, description FROM users
INNER JOIN orders ON users.id = orders.userId 

-- Listar usuario e endereço em uma mesma consulta
SELECT username, street, number FROM address
INNER JOIN users ON address.userId = users.id

SELECT username, street, number FROM users
INNER JOIN address ON address.userId = users.id

-- Listar endereço e pedido de um usuário (Não recomendado)
SELECT street, description FROM address
INNER JOIN orders ON address.userId = orders.userId

-- Listar endereço e pedido de um usuário (Recomendado)
SELECT username, description, street FROM users
INNER JOIN address ON users.id = address.userId
INNER JOIN orders ON users.id = orders.userId

-- Resolvendo problemas de ambiguidade
SELECT users.id, username, description, street FROM users
INNER JOIN address ON users.id = address.userId
INNER JOIN orders ON users.id = orders.userId

SELECT users.id, 
	   users.username, 
       orders.description, 
       address.street 
FROM users
INNER JOIN address ON users.id = address.userId
INNER JOIN orders ON users.id = orders.userId

SELECT us.id, 
	   us.username, 
       `or`.description, 
       ad.street 
FROM users as us
INNER JOIN address as ad ON us.id = ad.userId
JOIN orders as `or` ON us.id = `or`.userId

-- Listar TODOS os usuários e seus pedidos (RIGHT/LEFT JOIN)
SELECT username, description FROM users LEFT JOIN orders 
ON users.id = orders.userId

SELECT username, description FROM orders RIGHT JOIN users 
ON users.id = orders.userId

SELECT username, description FROM users RIGHT JOIN orders 
ON users.id = orders.userId -- para testar esse caso é necessário deixar o userId de orders nulável


-- Listar usuários que foram indicados por outros usuarios. (SELF JOIN)
SELECT 
	indicacao.id, indicacao.username as indicado, indicou.username indicador
FROM users AS indicou
JOIN users AS indicacao ON indicacao.createdBy = indicou.id

-- Listar usuários que foram indicados por outros usuarios. (SELF JOIN)
SELECT 
	indicacao.id, indicacao.username as indicado, indicou.username indicador
FROM users AS indicou 
JOIN users AS indicacao ON indicacao.createdBy = indicou.id

SELECT 
	indicacao.id, indicacao.username as indicado, indicou.username indicador
FROM users AS indicou 
RIGHT JOIN users AS indicacao ON indicacao.createdBy = indicou.id

-- bonus
SELECT users.id, users.username, COUNT(orders.id) FROM users 
LEFT JOIN orders ON users.id = orders.userId
GROUP BY users.id
