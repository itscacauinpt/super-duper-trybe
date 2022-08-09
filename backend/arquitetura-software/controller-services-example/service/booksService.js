const model = require('../model/booksModel');
const format = require('../utils/formated');

async function getAllService() {
  const books = await model.getAll();

  return books;
}

async function getByIdService(id) {
  const book = await model.getById(id);

  if (!book[0]) return null;
  return book.map(format.formatBooks)[0];
}

module.exports = {
  getAllService,
  getByIdService,
}