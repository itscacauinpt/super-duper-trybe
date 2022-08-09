const model = require('../model/booksModel');

async function getAllService() {
  const books = await model.getAll();

  return books;
}

module.exports = {
  getAllService,
}