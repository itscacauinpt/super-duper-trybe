const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'minhasenha',
  database: 'rest_exercicios'
});

module.exports = db;