const mysql = require('mysql2/promise');

const db = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'minhasenha',
	database: 'cep_lookup'
});

module.exports = db;