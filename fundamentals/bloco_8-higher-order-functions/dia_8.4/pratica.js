//1 - Dada uma matriz, transforme em um array.

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // de onde caralhos saiu esse concat mano
  //return arrays.reduce((acc, curr) => acc.concat(curr));
  return arrays.reduce((acc, curr) => [`${acc}, ${curr}`]);
};
//console.log(flatten())

//

//5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, curr) => {
    return acc + curr.split('').filter((letra) => {
      let howMany = 0;
      if (letra === 'a' || letra === 'A') {
        howMany += 1;
      }
      return howMany;
    }).length;
  }, 0);
}
//console.log(containsA())

//6. - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map , e você pode ver o objeto esperado na constante expected .
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  /**
   *   return grades.map((student) => {
    console.log(student)
  })
   */
  //return `name: ${students[0]}, average: ${grades[0]}`  
}
console.log(studentAverage())
  //const [primeiro, segundo, terceiro] = grades;
  //return primeiro;
  /**
   *   const { length } = grades;
  return length;
  const { length } = grades;
  return length;
   */