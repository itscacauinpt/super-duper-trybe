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
 */



