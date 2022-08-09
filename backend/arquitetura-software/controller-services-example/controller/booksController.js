const service = require('../service/booksService');
// controller retorna os status
async function getAll(_req, res) {
  const books = await service.getAllService();

  return res.status(200).json(books)
}

async function getById(req, res) {
  const { id } = req.params;
  const book = await service.getByIdService(id);

  return res.status(200).json(book);
}

module.exports = {
  getAll,
  getById,
}