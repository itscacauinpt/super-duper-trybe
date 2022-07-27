// Para podermos ler o nome e sobrenome da pessoa que executou o script, vamos utilizar um pacote de terceiros: o readline-sync.
// https://www.npmjs.com/package/readline-sync
const pacote_readline = require('readline-sync');

const name = pacote_readline.question('Qual seu nome? ');
const age = pacote_readline.questionInt('Qual sua idade? ');
// A função question interpreta a resposta como uma string comum, ao passo que a função questionInt converte a resposta para número utilizando o parseInt e retorna um erro caso a pessoa tente inserir algo que não seja um número válido.

// console.log('Hello World');
console.log(`Eai, ${name}! Tua idade é ${age}, né? Nice!`)
// npm start