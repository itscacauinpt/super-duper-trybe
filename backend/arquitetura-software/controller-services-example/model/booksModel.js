const db = require('./connection');
// const format =require('../utils/formated');

async function getAll() {
  const query = 'select * from model_example.books;';
  const [ books ] = await db.execute(query);

  return books;
}

async function getById(id) {
  const query = 'select * from model_example.books where id = ?;';
  const [ book ] = await db.execute(query, [id]);

  return book;
}

module.exports = {
  getAll,
  getById,
}