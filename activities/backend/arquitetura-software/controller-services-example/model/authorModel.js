const db = require('./connection');

async function GetAllModel() {
  const query = 'select * from model_example.authors;'
  const [ authors ] = await db.execute(query);

  return authors;
}

async function getByIdModel(id) {
  const query = 'select * from model_example.authors where id = ?;';
  const [ authorsArray ] = await db.execute(query, [id]);

  return authorsArray;
}

// async function create() {

// }

module.exports = {
  GetAllModel,
  getByIdModel,
}