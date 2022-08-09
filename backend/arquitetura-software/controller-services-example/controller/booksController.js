const service = require('../service/booksService');
// controller retorna os status
async function getAll(_req, res) {
  const books = await service.getAllService();

  return res.status(200).json(books)
}

module.exports = {
  getAll,
}