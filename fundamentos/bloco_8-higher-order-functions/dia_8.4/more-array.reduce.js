//função com o for:
const numbers = [32, 15, 3, 2, -5, 56, 10];
let sumNumbers = 0;
// A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!

for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];
}
//console.log(sumNumbers); // 113

//função com o reduce:
const soma = (acc, curr) => {
  return acc = curr;
}
const comReduce = numbers.reduce(soma, 0);
//console.log(comReduce);
/**const comReduce = numbers.reduce((acc, curr) => {
  return acc + curr
});
console.log(comReduce); */

//função para achar o maior numero:
const numb = [50, 85, -30, 3, 15];

const getBigger = (acc, curr) => ((acc > curr) ? acc : curr);
const bigger = numb.reduce(getBigger, 0);
//console.log(bigger); // 85

const otoBigger = numb.reduce((acc, curr) => {
  return acc > curr ? acc : curr
});
//console.log(otoBigger);

const string = {
  'a': 'b',
  'c': 'd',
  'e': 'f',
};

//console.log(string['a'])

const otroNumbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const evenSum = otroNumbers.filter((number) => {
  return number % 2 === 0;
}).reduce((acc, curr) => {
  return acc + curr;
});

//console.log(evenSum);

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

const getBestClass = (acc, materia) => {
  if (acc.nota > materia.nota) return acc;
  return materia;
};

const reportBetter = (students) => students.map((student) => ({
  name: student.nome,
  materia: student.materias.reduce(getBestClass).name}));

console.log(reportBetter(estudantes));

/**
 * const maiorNota = estudantes.map((element) => {
  const nota = element.materias.reduce((acc, curr) => {

  });
})
//console.log(maiorNota)
 */

