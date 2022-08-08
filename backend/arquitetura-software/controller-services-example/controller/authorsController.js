const service = require('../service/authorsService');
// controller retorna os status
async function getAll(_req, res) {
  const authors = await service.getAllService();

  return res.status(200).json(authors)
}

module.exports = {
  getAll,
}