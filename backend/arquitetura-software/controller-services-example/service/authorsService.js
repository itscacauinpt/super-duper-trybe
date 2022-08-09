const model = require('../model/authorModel');
// service onde as validações
async function getAllService() {
  const authors = await model.GetAllModel();
  return authors;
}

module.exports = {
  getAllService,
}