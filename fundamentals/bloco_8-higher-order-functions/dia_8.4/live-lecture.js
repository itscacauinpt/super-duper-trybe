const players = [
  { fullName: 'Adriano Imperador', email: 'didico@futebol.br' },
  { fullName: 'Ronaldinho Gaúcho', email: 'bruxo@futebol.br' },
  { fullName: 'Ronaldo Fenômeno', email: 'cortedocascao@futebol.br' },
  { fullName: 'Marta Vieira da Silva', email: 'rainhamarta@futebol.br' },
];
  
// Reduza o array acima em um objeto conforme o exemplo abaixo
  
// {
// 	'Adriano Imperador': 'didico@futebol.br',
// 	'Ronaldinho Gaúcho': 'bruxo@futebol.br',
// 	'Ronaldo Fenômeno': 'cortedocascao@futebol.br',
// 	'Marta Vieira da Silva': 'rainhamarta@futebol.br',
// } 

// Como inserir uma entrada num objeto?

// Atenção para o tipo do retorno!

// Solução com reduce

//retornar soma dos evens
const numbers = [2, 3, 4, 5, 6, 7, 8];
const evenNumbers = numbers.filter((num) => num % 2 === 0).reduce((acc, curr) => acc + curr);
//console.log(evenNumbers);

const pergunta = ['sera', 'que', 'vou', 'entender', 'essa', 'bagaça', '?']
const perguntaCompleta = pergunta.reduce((acc, curr) => {
  console.log(acc)
  return `${acc} ${curr}`;
})
console.log(perguntaCompleta);

//akshay 
const outup = players.map((player) => `${player.fullName}, email: ${player.email}`);
//console.log(outup);


// reduce to a array with people with the same age
const users = [
  {name: 'ana', age: 21},
  {name: 'bea', age: 21},
  {name: 'caio', age: 20},
  {name: 'dani', age: 25},
  {name: 'efe', age: 25},
];
//acc = { 21 : 2, 20 : 1, 25 : 1 }
const newArray = users.reduce(function (acc, curr){
  if (acc[curr.age]) {
    acc[curr.age] += acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  console.log(acc[curr.age])

  return acc;

}, {})//initial value will be an empty object, because there's no data presente in it
console.log(newArray);
