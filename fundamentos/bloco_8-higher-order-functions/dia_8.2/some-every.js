//1 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, 
//retorne false , use some ;

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  //return names.some((nomeEscolhido) => nomeEscolhido === name);
  return arr.some((nomeEscolhido) => nomeEscolhido === name);
}
//console.log(hasName(names, 'Ana'))

//2 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual 
//a mínima e caso contrário false , use every ;

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 18 },//era 18
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  //Adicione seu código aqui
  return arr.every((theAge) => theAge.age >= minimumAge);
  
};

//console.log(verifyAges(people, 18));

//some equals to 'does any element have theses characteristics?'
const hasNegative = [-2, -1, 0, 1, 2]
const moreThanZero = hasNegative.some((element) => element < 0);
console.log(moreThanZero);//return true because there's negative elements: 'it has elements minor than zero?'

//every number has to meet the condition
const itHAsPositive = [1, 2, 3];
const positive = itHAsPositive.every((element) => element > 0);
console.log(positive); //it returns true because EVERY number/element is greater than zero. 'does this array have all its item greater than zero?'
