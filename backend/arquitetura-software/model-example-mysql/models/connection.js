const mysql = require('mysql2/promise');

// abrir e manter conexão de db
const connection = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: 'minhasenha',
	database: 'model_example'
});

module.exports = connection;