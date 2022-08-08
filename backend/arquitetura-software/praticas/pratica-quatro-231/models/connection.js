const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'minhasenha',
  database: 'users_pratica'
})

module.exports = connection;