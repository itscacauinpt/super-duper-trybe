DROP DATABASE IF EXISTS delivery;
CREATE DATABASE delivery;
USE delivery;

CREATE TABLE users (
	  id INT AUTO_INCREMENT PRIMARY KEY,
  	username VARCHAR(50) NOT NULL,
  	document VARCHAR(11) NOT NULL,
  	createdBy INT,
  	FOREIGN KEY (createdBy) REFERENCES users (id)
);

INSERT INTO users VALUES 
(1, 'bojack.horseman', '11122233344', NULL),
(2, 'satoshi.nakamoto', '44455566678', 1),
(3, 'walter.white', '75315984256', 1),
(4, 'homer.simpson', '98741236585', 2);

CREATE TABLE orders (
  	id INT AUTO_INCREMENT PRIMARY KEY,
  	userId INT NOT NULL,
  	description VARCHAR(100) NOT NULL,
  	price INT NOT NULL DEFAULT 0,
  	createdAt DATETIME DEFAULT NOW(),
  	FOREIGN KEY(userId) REFERENCES users(id)
 );
 
 INSERT INTO orders VALUES 
 (1, 4, 'Miojo', 450, NOW()),
 (2, 3, 'Pizza', 2500, NOW()),
 (3, 4, 'Coxinha', 550, NOW()),
 (4, 1, 'Pastel', 225, NOW()),
 (5, 1, 'Lasanha', 5500, NOW());
 
 CREATE TABLE address (
   id INT AUTO_INCREMENT PRIMARY KEY,
   userId INT NOT NULL,
   street VARCHAR(120) NOT NULL,
   number INT,
   zipcode VARCHAR(10),
   FOREIGN KEY(userId) REFERENCES users(id)
 );
 
 INSERT INTO address VALUES 
 (5, 1, 'Rua Marrocos', 15, '25874010'),
 (6, 2, 'Rua blockchain', 5, '698754555'),
 (7, 3, 'Rua Azul', 65, '874523654'),
 (8, 4, 'Rua dos Bobos', 0, '78952000');
 
