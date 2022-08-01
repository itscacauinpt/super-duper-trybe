const { deposit, withdraw } = require('./services/service-bank.js');
const readLine = require('readline-sync');

async function main() {
  const options = ['Depósito', 'Saque'];
  const index = readLine.keyInSelect(options, 'O que deseja?');

  const procedure = [deposit, withdraw];

  procedure[index]();

  console.log('Conluído.')
};

main();