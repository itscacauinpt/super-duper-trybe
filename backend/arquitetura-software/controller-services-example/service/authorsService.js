const db = require('../model/authorModel');
// service onde as validações
async function getAllService() {
  const authors = await db.GetAllModel();
  return authors;
}

module.exports = {
  getAllService,
}