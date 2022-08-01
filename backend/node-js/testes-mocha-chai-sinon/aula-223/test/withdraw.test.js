const { withdraw } = require('../services/service-bank');
const { expect } = require('chai');
const sinon = require('sinon');
const readLine = require('readline-sync');
const fs = require('fs').promises;

describe('Testando função de saque, ao tentar sacar 25 reais', () => {
  const fakeAccount = {
    "id": 1659288731793,
    "value": 100,
    "coin": "BRL",
    "createdAt": "2022-07-31T17:32:11.793Z",
  };

  before(() => {
    sinon.stub(readLine, 'questionFloat').returns(25);
    sinon.stub(fs, 'writeFile').resolves();
    sinon.stub(fs, 'readFile').resolves(JSON.stringify(fakeAccount));
  });
  after(() => {
    readLine.questionFloat.restore();
    fs.writeFile.restore();
    fs.readFile.restore();
  });

  it('retorna id numero, valor depositado, tipo da moeda', async () => {
    const result = await withdraw();

    expect(result.id).to.be.a('number');
    expect(result.value).equal(75);
    expect(result.coin).equal('BRL');
  });
});
