select
  *
from
  orders
where
  userid = 1;

-- endereco do nakamoto, username vem do users, e o endereco vem de address
select
  username,
  street,
  number,
  zipcode
from
  address
  join users on address.userId = users.id
where
  userId = 2;

-- pedido do homer
select
  username,
  description,
  format(price / 100, 2)
from
  orders
  join users on orders.userId = users.id
where
  userId = 4
  and orders.id = 1;

-- endereco e pedido 1 do homer
select
  users.username as 'destinatário', -- users
  orders.description as 'pedido', -- orders
  format(orders.price / 100, 2) as 'preço', -- orders
  address.street as 'rua', -- address
  address.number as 'num', -- address
  address.zipcode as 'cep' -- address
from
  orders -- tabela de referencia
  join users on users.id = orders.userId -- juntando users, onde o userId da tabela orders é o id na tabela users
  join address on address.userId = users.id -- juntando address, onde o userId de address é o id na tabela users
where
  users.id = 4 -- condicoes
  and orders.id = 1;
  
  -- mesma coisa que a de cima, pedido
  select
  orders.id as 'num do pedido', 
  users.username as 'destinatário', -- users
  orders.description as 'pedido', -- orders
  format(orders.price / 100, 2) as 'preço', -- orders
  address.street as 'rua', -- address
  address.number as 'num', -- address
  address.zipcode as 'cep' -- address
from
  users -- tabela de referencia
  inner join orders on orders.userId = users.id -- juntando orders, onde o userId da tabela orders é o id na tabela users
  inner join address on address.userId = users.id -- juntando address, onde o userId de address é o id na tabela users
where
  users.id = 1 and
  orders.id = 4;
  -- inner join, junção explicita, informações que se relacionam

select users.id, users.username, count(orders.id) as 'quantos pedidos' from users
left join orders on orders.userId = users.id
group by users.id;
