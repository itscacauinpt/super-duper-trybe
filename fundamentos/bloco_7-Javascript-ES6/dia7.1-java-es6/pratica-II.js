//Crie uma função que receba um número e retorne seu fatorial.

const fatorial = (n) => {
  let fat = 1;
  for (let i = 2; i <= n; i += 1 ) {
    fat = fat * i;
  }
  console.log(fat);
}
fatorial(4);

//Crie uma função que receba uma frase e retorne qual a maior palavra.

const theLongestWord = (phrase) => {
  let phraseChar = phrase.split(' ');
  let maxLength = 0;
  let theLongest = '';
  for (let word of phraseChar) {
    if (phraseChar.length > maxLength) {
      maxLength = word.length;
      theLongest = word;
    }
  }
  return theLongest;
}

console.log(theLongestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));