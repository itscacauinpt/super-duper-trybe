const db = require('./connection');
// model, banco de dados
async function GetAllModel() {
  const query = 'select * from model_example.authors;'
  const [ authors ] = db.execute(query);
  return authors;
}

module.exports = {
  GetAllModel,
}