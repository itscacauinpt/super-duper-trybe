const num = [19, 21, 30, 3, 45, 22, 15];
const verifyEven = (number) => number % 2 === 0;
const isEven = num.find(verifyEven); //console.log(verifyEven(2));//true

//1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista:

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (array) => {
  // Adiciona seu código aqui
  return array.find((number) => number % 3 === 0 && number % 5 === 0);
}
console.log(findDivisibleBy3And5(numbers));


//2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (arrayName) => {
  // Adicione seu código aqui:
  return arrayName.find((nome => nome.length === 5));
}
console.log(findNameWithFiveLetters(names));


//3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  // Adicione seu código aqui
  return musicas.find((aquelaMusica) => id === aquelaMusica.id);

};

console.log(findMusic('31031685'));

//the array.find will search inside of the array and it will return the first element for wiccallback function return a tri=uthy value 
//goes through all the elements of an erray, if the considion its true it will return the elements, if it doesnt find your item, it return undefined
const objects = [
  {
    id: 'a'
  },
  {
    id: 'b'
  },
  {
    id: 'c'
  }
];
const found = objects.find((item) => item.id === 'b');
console.log(found);

//find index
const foundIndex = objects.findIndex((item) => item.id === 'b');
console.log(foundIndex);