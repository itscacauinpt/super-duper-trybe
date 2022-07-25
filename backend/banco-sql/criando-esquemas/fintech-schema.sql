drop database if exists fintech;
create database fintech;
use fintech;

drop table if exists transactions;

create table transactions (
	id int auto_increment primary key,
  	username varchar(50) not null,
  	amount int not null,
  	type varchar(15) not null,
  	created_at datetime default now()
);

INSERT INTO transactions (username, amount, type, created_at) VALUES 
('bojack.horseman', 100000, 'deposit', DATE_SUB(NOW(), INTERVAL 5 DAY)),
('bojack.horseman', -50000, 'withdraw', DATE_SUB(NOW(), INTERVAL 4 DAY)),
('bojack.horseman', 250000, 'deposit', DATE_SUB(NOW(), INTERVAL 3 DAY)),
('bojack.horseman', -10000, 'withdraw', DATE_SUB(NOW(), INTERVAL 3 DAY)),
('bojack.horseman', -10000, 'payment', DATE_SUB(NOW(), INTERVAL 2 DAY)),
('bojack.horseman', -20000, 'payment', DATE_SUB(NOW(), INTERVAL 2 DAY)),
('satoshi.nakamoto', 120000, 'deposit', DATE_SUB(NOW(), INTERVAL 5 DAY)),
('satoshi.nakamoto', 18000, 'deposit', DATE_SUB(NOW(), INTERVAL 10 DAY)),
('satoshi.nakamoto', 22000, 'deposit', DATE_SUB(NOW(), INTERVAL 8 DAY)),
('satoshi.nakamoto', -100000, 'payment', DATE_SUB(NOW(), INTERVAL 5 DAY)),
('satoshi.nakamoto', -60000, 'withdraw', DATE_SUB(NOW(), INTERVAL 4 DAY)),
('satoshi.nakamoto', 18000, 'deposit', DATE_SUB(NOW(), INTERVAL 1 DAY)),
('satoshi.nakamoto', 12000, 'donated', DATE_SUB(NOW(), INTERVAL 1 DAY)),
('walter.white', 1000000, 'deposit', DATE_SUB(NOW(), INTERVAL 8 DAY)),
('walter.white', -123456, 'withdraw', DATE_SUB(NOW(), INTERVAL 7 DAY)),
('walter.white', -100000, 'payment', DATE_SUB(NOW(), INTERVAL 5 DAY)),
('walter.white', 76544, 'deposit', DATE_SUB(NOW(), INTERVAL 3 DAY)),
('homer.simpson', 10000, 'deposit', DATE_SUB(NOW(), INTERVAL 2 DAY)),
('homer.simpson', -5000, 'withdraw', DATE_SUB(NOW(), INTERVAL 1 DAY)),
('homer.simpson', 10000, 'donated', DATE_SUB(NOW(), INTERVAL 1 DAY));
