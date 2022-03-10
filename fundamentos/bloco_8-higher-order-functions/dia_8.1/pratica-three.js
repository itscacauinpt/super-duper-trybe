/**
 * 3 - Crie uma HOF que receberá três parâmetros. 
 * O primeiro será um array de respostas corretas (Gabarito), 
 * o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) 
 * 
 * e o terceiro é uma função que checa se as respostas estão corretas e 
 * faz a contagem da pontuação final recebida pela pessoa estudante. 
 * 
 * Ao final a HOF deve retornar o total da contagem de respostas certas.
 * 
 * Quando a resposta for correta a contagem sobe 1 ponto, 
 * quando for incorreta desce 0.5 pontos, 
 * e quando não houver resposta ("N.A") não altera-se a contagem.
 */

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['N.A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

//função theResult é a base para implementar a lógica de uma outra função, então recebe a função logic e os param que precisa para a logic funcionar;
const theResult = (rightAnswers, studentAnswers, logic) => {
  //logic vai ser a função que vamos chamar e usar para ter o resultado;

  //result vai ter chamar a função logic para pegar seu return;
  let result = 0;
  for (let i = 0; i < rightAnswers.length; i += 1 ) {
    //o result vai ser o resultado da função com a lógica única: cada letra passada do array, é implementado a lógica da função;
    result += logic(rightAnswers[i], studentAnswers[i]);
  }

  return `${result} total da contagem de respostas`;
};

//o check também vai precisar dos parâmetros bases porque o valor deles vai estar na chamada da função base;
const check = (rightAnswers, studentAnswers) => {
  //logic
  //aqui a função logic vai fazer todo o trabalho de checar as notas, vai ter uma lógica única;
  if (rightAnswers === studentAnswers) {
    return 1;
  } 
  if (studentAnswers === 'N.A') {
    return 0;
  }
  return -0.5
};

//o console.log vai chamar a função, que vai dar os parâmetros e a função logic ;
console.log(theResult(RIGHT_ANSWERS, STUDENT_ANSWERS, check));

//logic, action, callback, são formas de explicar como as hofs funcionam, são nomes bases para encaixar outras funções.
