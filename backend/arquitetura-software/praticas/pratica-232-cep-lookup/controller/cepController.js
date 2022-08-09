const service = require('../service/cepService');

async function getCep(req, res) {
  const { cep } = req.params;

  const theCep = await service.getCepService(cep);

  return res.status(200).json(theCep);
};

async function newCepAdress(req, res) {
  const { cep, logradouro, bairro, localidade, uf } = req.body;
  const newADress = await service.newAdressService(cep, logradouro, bairro, localidade, uf);

  return res.status(200).json(newADress);
}

module.exports = {
  getCep,
  newCepAdress,
};