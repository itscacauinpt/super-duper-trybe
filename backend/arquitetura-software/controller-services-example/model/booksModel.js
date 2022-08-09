const db = require('./connection');

async function getAll() {
  const query = 'select * from model_example.books;';
  const [ books ] = await db.execute(query);

  return books;
}

module.exports = {
  getAll,
}