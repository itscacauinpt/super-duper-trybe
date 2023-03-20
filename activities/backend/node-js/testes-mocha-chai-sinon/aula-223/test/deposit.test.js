const { deposit } = require('../services/service-bank');
const { expect } = require('chai');
const sinon = require('sinon');
const readLine = require('readline-sync');
const fs = require('fs').promises;

describe('Testando função do depósito, ao tentar depositar 100 reais', () => {

  before(() => {
    sinon.stub(readLine, 'questionFloat').returns(100);
    sinon.stub(fs, 'writeFile').resolves();
  });

  after(() => {
    readLine.questionFloat.restore();
    fs.writeFile.restore();
  });

  it('retorna id numero, valor depositado, tipo moeda', async () => {
    const result = await deposit();

    expect(result.id).to.be.a('number');
    expect(result.value).equal(100);
    expect(result.coin).equal('BRL');
  });
});
