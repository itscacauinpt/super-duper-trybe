const pacote_readline = require('readline-sync');
const operacoes = require('./operacoes.js');

console.log('Calculadora Simples');
// npm install readline-sync -> para ler oq é escrito pelo user

const num1 = pacote_readline.questionInt('Digite o primeiro número de sua continha: ');
const operacao_escolhida = pacote_readline.question('Digite sua operação (+, -, *, /): ');
const num2 = pacote_readline.questionInt('Digite o segundo número de sua continha: ');

switch (operacao_escolhida) {
  case '+':
    operacoes.soma(num1, num2)
    break;
  case '-':
    operacoes.sub(num1, num2)
    break;
  case '/':
    operacoes.div(num1, num2)
    break;
  case '*':
    operacoes.mult(num1, num2)
    break;
  default: console.log('Opa, algo de errado não está certo.')
}