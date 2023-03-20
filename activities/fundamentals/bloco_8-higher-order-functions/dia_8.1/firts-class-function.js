/**
 * const sumFixAmount = (amount) => {
  return (number) => amount + number;
}

const initialSum = sumFixAmount(15)
console.log(initialSum(5));

const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(3, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});

repeat(5, console.group);
 */
/**
 * const sum = (num1, num2) => num1 + num2;

const calculator = (func) => func(10, 5);

console.log(calculator(sum));
 */

const radius = [3, 1, 2, 4];

//funções com seus cálculos, precisando dos parâmetros bases pra dar match na função base
const area = (elemento) => {
  return Math.PI * elemento * elemento;
};

const circunference = (elemento) => {
  return 2 * Math.PI * elemento;
};

const diameter = (elemento) => {
  return 2 & elemento;
}

//função base para implementar a lógica das funções de cáculo
const calculator = (elemento, logic) => {
  const output = [];
  for (let i = 0; i < elemento.length; i +=1) {
    output.push(logic(elemento[i]));
  }
  return output;
};

//substituindo os parâmetros bases pelo array e funções com os cáculos
console.log(calculator(radius, area));
console.log(calculator(radius, diameter));
console.log(calculator(radius, circunference));
