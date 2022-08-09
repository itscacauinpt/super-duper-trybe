const service = require('../service/authorsService');
// controller retorna os status
async function getAll(_req, res) {
  const authors = await service.getAllService();

  return res.status(200).json(authors)
}

async function getById(req, res) {
  const { id } = req.params;
  const author = await service.getByIdService(id);
  
  return res.status(200).json(author);
}

module.exports = {
  getAll,
  getById,
}