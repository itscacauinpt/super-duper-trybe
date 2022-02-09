/**
 * 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
 * 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. 
 * 3 - Faça um for/in que mostre todas as chaves do objeto. 
 * 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto
 * 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.
 */

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
};

console.log('Bem vinda, ' + info.personagem);

for (let properties in info) {
    console.log(info[properties]);
}

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
};

for (let properties in info2) {
    if (info[properties] === 'Sim' && info2[properties] === 'Sim') {
      console.log('Ambos recorrentes');
        
    } else {
      console.log(info[properties] + ' e ' + info2[properties]);
    }
    //console.log(info.personagem + ', é recorrente? ' + info[properties] + '. ' + info2.personagem + ', é recorrente? ' + info2[properties]);
}

/**
 * 6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
 * 7 - Adicione um novo livro favorito na chave livrosFavoritos , que é um array . Atribua a esta chave um objeto contendo as seguintes informações:
 * 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".
 */

 let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '"');

leitor.livrosFavoritos.push(
    {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editor: 'Rocco',
    },
  );

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');

//Funções Part II

/**
 * 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
 * 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
 * 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
 * 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
 * 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
 * 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
 * 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
 *
 */

/**
 * Reverse a string with built=in functions
 * split() method splits a string into an array of strings
 * reverse() methods reverses an array in place
 * join() method joins all elements of an array into a string

function reverseString(word) {

  let splitWord = word.split('');
  //console.log(splitWord);
  
  let reverseWord = splitWord.reverse();
  //console.log(reverseWord);
  
  let joinWord = reverseWord.join('');
  //console.log(joinWord)
  return joinWord;
  
}
console.log(reverseString('hello'));
OU
function reverterString (word) {
  return word.split('').reverse().join('');
}
console.log(reverterString('Arara'));
*/

function isItPalindromo(word) {
  for (let i = 0; i < word.length; i+=1) {
    //console.log(word[i]);
    for (let i2 = 0; i2 < word.length; i2+=1) {
      //console.log(word[i]);
      if (i === i2) {
        return true
      } else {
        return false
      }
    }
  }
}


console.log(isItPalindromo('arara'));