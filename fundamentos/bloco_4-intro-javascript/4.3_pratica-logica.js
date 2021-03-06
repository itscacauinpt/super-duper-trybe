/**
 * 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24
Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.
 */
let fatorial = 10;
for (let i = 1; i < 10 && i > 0; i+=1) {
    fatorial = fatorial*i;
}
console.log(fatorial);

/**
 * 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

*/
let word = 'tryber';
let reversed = '';

for (let i = 0; i < word.length; i+=1){
    //reversed += word.length-1;
    //reversed += word.charAt(-1);
    reversed += word.charAt(word.length-1-i);
} 
 console.log(reversed);

/**
 * 3- Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
 */

let array = ['java', 'javascript', 'python', 'html', 'css'];

//console.log(array[0])
let maiorPalavra = array[0];
let menorPalavra = array[0];

for (i = 0; i < array.length; i+=1) {
    if (array[i].length > maiorPalavra.length) {
        maiorPalavra = array[i];
    }
}

for (i = 0; i < array.length; i+=1) {
    if (array[i].length < menorPalavra.length) {
        menorPalavra = array[i];
    }
}

console.log(maiorPalavra);
console.log(menorPalavra);

/**
 *4-  Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

 1. achar o maior numero primo entre 0 e 50
    antes eu preciso saber quem são os pares e os primos.
    a. que numeros?
        mostrar numeros de 0 a 50.
    b. o que são numeros primos?
        são numeros divisiveis apenas por 1 e por ele mesmo.
    c. o que são numeros pares?
        numeros que divididos por dois resta zero, numeros que dividem mais de duas vezes.
*/

let maiorPrimo = 0;

for (let numero = 0; numero <= 50; numero+=1) {
    let primo = true;
    for (tabuada = 2; tabuada < numero; tabuada +=1) {
        if (numero%tabuada===0) {
            primo = false;
        }
    }
    if (primo) {
        maiorPrimo = numero;
    }
}
console.log(maiorPrimo);

/**
 * Bônus
1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
 */

let n = 5;
let imprima = '*';
let forma = '';

/*
for (i = 0; i < n; i +=1) {
    forma += imprima;
    console.log(forma)
}
*/
for (i = 0; i < n; i +=1) {
    forma += imprima;
}
for (imprimi = 0; imprimi < n; imprimi +=1){
    console.log(forma)
}

/**
 * 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
 */

let n2 = 5;
let imprima2 = '*';
let forma2 = '';

for (i = 0; i < n2; i +=1) {
    forma2 += imprima2;
    console.log(forma2);
}

/**
 * 3- Agora inverta o lado do triângulo.
 */

let n3 = 5;
let imprima3 = '*';
let forma3 = ' ';
let posicao = n;

for (let i=0; i < n; i+=1) {
    for (let iColuna=0; iColuna <= n; iColuna+=1) {
        if (iColuna < posicao) {
            forma3 += ' '; 
        } else {
            forma3 += imprima3;
        }
    }
    console.log(forma3);
    forma3 = ' ';
    posicao -=1;
}
//

/**
 * Exercícios seis
 */

let num = 31;
let divisors = 1;

for (let number = 2; number <= num; number +=1) {
    if (num%number===0) {
        divisors += 1;
    }
    if (divisors===2) {
        console.log(num + ' é primo.');
    
    } else {
        console.log(num + ' não é primo.');
    }
}

