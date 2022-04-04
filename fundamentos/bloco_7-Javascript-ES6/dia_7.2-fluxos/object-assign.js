/*Esse método é utilizado para copiar os valores de todas as propriedades de um ou mais objetos para um objeto destino. Sua estrutura é:
A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino!
Object.assign(destino, objeto1);
Object.assign(destino, objeto1, objeto2);
Object.assign(destino, objeto1, objeto2, objeto3, objeto4);
*/
//o primeiro parâmetro sempre será o objeto de destino, e os parâmetros restantes serão os valores que serão adicionados a esse objeto destino.

const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family);
//console.log(person);

const person1 = {
  name: 'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

/**
 * const clone = Object.assign(person1, lastName);
console.log(person1);
console.log(clone);

clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
console.log('--------------');

person.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }

 */

//Se você modificar o cloneObj , verá que novamente teremos o mesmo resultado anterior, de forma que o obj também é alterado.
const obj = { value1: 10, value2: 11 };
const cloneObj = obj;

// podemos passar como primeiro parâmetro do Object.assign um objeto vazio {} e armazenar seu retorno em uma nova variável. 

const person2 = {
  name:'Roberto',
};

const lastName2 = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person2,lastName2);//newPerson sendo uma cópia, uma junção dos dois objetos
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person2);
//Agora, apenas o objeto newPerson será modificado.
