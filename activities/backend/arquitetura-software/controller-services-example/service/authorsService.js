const model = require('../model/authorModel');
const format = require('../utils/formated');

async function getAllService() {
  const authors = await model.GetAllModel();
  return authors;
}

async function getByIdService(id) {
  const author = await model.getByIdModel(id);

  if (!author[0]) return null;
  return author.map(format.formatAuthors)[0];
}

module.exports = {
  getAllService,
  getByIdService,
}