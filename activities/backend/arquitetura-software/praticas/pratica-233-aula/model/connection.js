const mysql = require('mysql2/promise');

const db = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'minhasenha',
	database: 'model_database'
});

module.exports = db;