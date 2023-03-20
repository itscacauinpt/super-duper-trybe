/**
 * Part I - let, var e const
 * Onde utilizar o let, var e o const?
 * const? Constante, variável imutável, não dá para reatribuir um valor desse const!
 * Let? Valor que pode ser alterada!
 * Resumo da aula: 'Não use var, vlw flw'
 */

function userInfo() {
  let userEmail = 'maria@email.com';

  // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
  console.log(userEmail);
}
userInfo(); // 'userEmail is not defined! está fora do escopo da function! console.log(userEmail);

function minhaIdade() {
  for (var idade = 20; idade <= 25; idade += 1) {
    console.log(idade);
  }
  console.log('fora do for', idade); //o var vaza o baguio minina
}
minhaIdade();

if(true) {
  var nome = 'trybe';
}
console.log(nome, 'fora do if'); //olha o var vazando do escopo do if tsc tsc tsc

if (true) {
  // inicio do escopo do if
  var userAge = '20';
  console.log(userAge); // 20
  // fim do escopo do if
}
console.log(userAge); // 20

const estudante = {
  nome: 'Maria',
  idade: 20
}
estudante.idade = 24; //estudamos modificando um elemento, não o 
console.log(estudante);

/**
 * Parte II - template literals
 * criando strings complexas!
 * Você também pode adicionar uma expressão dentro das chaves, como ${a + b} .
 */

const myName = 'Isabella';
console.log('Hello' + ' ' + myName + '!'); //esse aqui dá ruim no lint T-T

const myName2 = 'Isabella';
console.log(`Welcome ${myName2}!`); //esse aui dá bom, pena que nunca lembro de como se escreve T-T

// Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
);

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n'); //o n/ serve para quebrar linha, legal que nunca usei esse :v

/**
 * Parte III - arrow functions
 * É agora mermão, arrow functions heuheuhe
 */

//função que sempre utilizava:
 const printName = function () {
  const myName = 'Lucas';
  return myName;
};
console.log(printName());

//arrow function:
const printName2 = () => {
  const myName = 'Lucas';
  return myName;
};
console.log(printName2());

//simplificando mais:
const printName3 = () => 'Lucas';
console.log(printName3);

//arrow function =>
const soma2 = (num1, num2) => {
  return num1 + num2;
}
console.log(soma2(2, 2));

//arrow function numa linha só linha minina, acredita?
const soma3 = (num1, num2) => num1 + num2;
console.log(soma3(2, 2));

function contaParalvras(frase) {
  return frase.split(' ').length;
}
console.log(contaParalvras('É noix na fita mermão!'));

//
const contaPalavras2 = frase => frase.split(' ').length;
console.log(contaPalavras2('É noix'));

//função que cria objeto
function objetoPessoa(nome, idade) {
  return {
    nome: nome,
    idade: idade
  }
}
console.log(objetoPessoa('Joana Dark', 25));

//arrow function que cria obj
const objPessoa = (nome, idade) => ({nome: nome, idade: idade});
console.log(objPessoa('Cacau', 21)); //erro >< só com um {}

//mais exemplos:
const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));

/**
 * Parte IV - ternary operator
 * A sintaxe básica do operador ternário é muito simples:
 * `expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;
 */

const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
console.log(trueExpression); // isso é verdade

const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
console.log(falseExpression); // isso é mentira

// Situação em que é mais simples usar o operador ternário:
const checkIfElse = (age) => {
  if (age >= 18) {
    return `Você tem idade para dirigir!`;
  } else {
    return `Você ainda não tem idade para dirigir...`;
  }
};

const checkTernary = (age) => (
  age >= 18 ? `Você tem idade para dirigir!` : `Você ainda não tem idade para dirigir...`
);

// Situação em que usar o operador ternário não faz muito sentido:
const checkIfElse2 = (fruit) => {
  if (fruit === `maçã`) {
    return `Essa fruta é vermelha`;
  } else if (fruit === `banana`) {
    return `Esta fruta é amarela`;
  } else {
    return `Não sei a cor`;
  }
};

const checkTernary3 = (fruit === `maçã`) ? `Essa fruta é vermelha` 
  : ((fruit === `banana`) ? `Esta fruta é amarela` : `Não sei a cor`);

// Aninhar operadores  ternários, como no exemplo acima, não é uma boa prática,
// pois torna o seu código truncado e difícil de ler, tirando todo o sentido de um
// operador cujo objetivo é facilitar a sua vida e a da pessoa que lerá seu código
// no futuro!