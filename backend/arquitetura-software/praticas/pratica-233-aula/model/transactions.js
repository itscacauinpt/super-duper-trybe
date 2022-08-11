// queries para fazer
// SELECT *
// FROM model_database.transactions;

// SELECT CAST(SUM(amount / 100) as DECIMAL(10,2)) as totalAmount, coin 
// FROM model_database.transactions
// WHERE coin = 'BRL'

// SELECT CAST(SUM(amount / 100000000) as DECIMAL(10,8)) as totalAmount, coin 
// FROM model_database.transactions
// WHERE coin = 'BTC'
const db = require('./connection');

async function getBalanceBTC() {
  const query = `SELECT CAST(SUM(amount / 100000000) as DECIMAL(10,8)) as totalAmount, coin 
  FROM model_database.transactions
  WHERE coin = 'BTC'`;
  const [ result ] = await db.execute(query);
  return result[0]
}

async function getBalanceBR() {
  const query = `SELECT CAST(SUM(amount / 100) as DECIMAL(10,2)) as totalAmount, coin 
  FROM model_database.transactions
  WHERE coin = 'BRL'`;
  const [ result ] = await db.execute(query);
}

async function createTRansaction({ coin, amount, type }) {
  const query = `INSERT INTO model_database.transactions (coin, amount, type) VALUES (?, ?, ?);`
  const [{ insertId }] = await db.execute(query, [ coin, amount, type ]);

  return { id: insertId, coin, amount, type };
}

// getBalanceBR().then(result => console.log(result));
// getBalanceBTC().then(result => console.log(result));
// createTRansaction({ amount: 400 * 100, coin: 'BRL', type: 'deposit' }).then(result => console.log(result));

module.exports = {
  getBalanceBR,
  getBalanceBTC,
  createTRansaction,
}
