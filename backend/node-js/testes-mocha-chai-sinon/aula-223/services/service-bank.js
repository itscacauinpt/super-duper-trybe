const fs = require('fs').promises;
const readLine = require('readline-sync');

const file = './account.json';

async function deposit() {
  const value = readLine.questionFloat('Insira valor para depósito: ');
  const data = { id: Date.now(), value, coin: 'BRL', createdAt: new Date() };
  
  fs.writeFile(file, JSON.stringify(data));
  
  return data;
}

async function withdraw() {
  const value = readLine.questionFloat('Insira valor para saccar: ');
  const data = fs.readFile(file, 'utf8');
  const parsed = JSON.parse(data);
  
  parsed.value = parsed.value - value;

  fs.writeFile(file, JSON.stringify(parsed, null, 2));

  return parsed;
}

module.exports = {
  deposit,
  withdraw
}