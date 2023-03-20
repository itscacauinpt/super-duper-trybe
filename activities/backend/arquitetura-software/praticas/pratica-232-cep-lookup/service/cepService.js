const model = require('../model/cepModel');

async function getCepService(theCep) {
  const cep = await model.getCepModel(theCep);

  const cepValid = /^\d{5}-?\d{3}$/.test(theCep);

  if (!cepValid) {
    return { "error": { "code": "invalidData", "message": "CEP inválido" } };
  }

  if (!cep || cep.length === 0) {
    return { "error": { "code": "notFound", "message": "CEP não encontrado" } };
  }

  return { code: 200, data: cep[0] };
}

async function newAdressService(cep, logradouro, bairro, localidade, uf) {
  const newCepAdress = await model.createNewAdress(cep, logradouro, bairro, localidade, uf);
  console.log(newCepAdress);

  return newCepAdress;
}

module.exports = {
  getCepService,
  newAdressService,
};