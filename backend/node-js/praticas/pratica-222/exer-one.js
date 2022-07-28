// Crie uma função que receba três parâmetros e retorna uma Promise.
// Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números".
// Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ((a + b) * c).
// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

function somaMultiplica([num1, num2, num3]) {
  const primise = new Promise((resolve, reject) => {
    // isNaN(num1) || isNaN(num2) || isNaN(num3)
    if (typeof num1 !== 'number'
    || typeof num2 !== 'number'
    || typeof num3 !== 'number') {
      return reject(new Error('Tu escreveu uma caracter não numérico ai cara'));
    }

    const result = (num1 + num2) * num3;
    
    if (result < 50) {
      return reject(new Error('Valor muito baixo'));
    } else {
      resolve(`Deu bom: ${result}`);
    }
  })

  return primise;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}
// console.log(getRandomNumber());

function getRandomNumbersArray() {
  // const randomNumbers = new Array(3);
  // return randomNumbers.push(getRandomNumber);
  // return new Array(3);
  const randomNumbers = Array.from({ length: 3 }).map(getRandomNumber);
  return randomNumbers;
}
// console.log(getRandomNumbersArray());

// console.log(somaMultiplica(1, 2, 3));
// somaMultiplica([1, 2, 3]).then((resolve) => console.log(resolve)).catch((error) => console.log(error))
somaMultiplica(getRandomNumbersArray()).then((resolve) => console.log(resolve)).catch((error) => console.log(error.message));
