const db = require('./connection');

async function getCepModel(theCep) {
  const query = 'select * from cep_lookup.ceps where cep = ?;';
  const [ cep ] = await db.execute(query, [theCep]);
  return cep;
}

async function createNewAdress(cep, logradouro, bairro, localidade, uf) {
  const query = 'insert into cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) values (?, ?, ?, ?, ?);';
  const newCepAdress = await db.execute(query, [cep, logradouro, bairro, localidade, uf]);
  return newCepAdress;
}

module.exports = {
  getCepModel,
  createNewAdress,
};