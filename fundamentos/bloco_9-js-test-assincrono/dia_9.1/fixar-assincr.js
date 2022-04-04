const pushNumber = (list, number) => list.push(number);
let numbers = [];

pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);
console.log(numbers); // [ 1, 2, 3 ]

const pushNumber2 = (list, number) => list.push(number);
let numbers2 = [];
// https://www.w3schools.com/jsref/met_win_settimeout.asp
// setTimeout é uma função assíncrona que espera um tempin para executar a função passada a ela como parâmetro.
setTimeout(() => pushNumber2(numbers2, 1), 3000);
setTimeout(() => console.log(numbers2), 3000); // Para que funcione é necessário chamá-lo após 3000 milissegundos:
pushNumber2(numbers2, 2);
pushNumber2(numbers2, 3);
console.log(numbers2); // O retorno é [2, 3]
