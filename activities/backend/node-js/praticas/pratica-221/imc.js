const readLine = require('readline-sync');
// npm install readline-sync
// https://www.npmjs.com/package/readline-sync#utility_methods

function calculadora(altura, peso) {
  return (peso / ((altura/100) ** 2)).toFixed(2);
}
// console.log(calculadora(159, 70));

function statusIMC(imc) {
  // switch () {
  //   case:
  //     console.log('Abaixo do peso');
  //     break;
  //   case :
  //     console.log('Peso normal');
  //     break;
  //   default: console.log('Não foi possível calcular')
  //     break;
  // }
  if (imc <= 18.5) {
    return console.log('Abaixo do peso');
  }
  if (imc > 18.5 && imc < 24.9) {
    return console.log('Peso normal');
  }
  if (imc > 25 && imc < 29.9) {
    return console.log('Acima do peso');
  }
  if (imc > 30 && imc < 34.9) {
    return console.log('Obesidade Grau I');
  }
  if (imc > 35 && imc < 39.9) {
    return console.log('Obesidade Grau II');
  }
  if (imc > 40) {
    return console.log('Obesidade Grau III e IV');
  }
}

function calculaIMC() {
  const peso = readLine.questionFloat('Qual seu peso (kg)? ');
  const altura = readLine.questionFloat('Qual sua altura (cm)? ');

  const imc = calculadora(altura, peso);
  console.log(`IMC:\n${imc}\n--------\nStatus: `)
  statusIMC(imc);
}

calculaIMC();
