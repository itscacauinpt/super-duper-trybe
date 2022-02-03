//Questão 1
//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados.

const a = 10;
const b = 20;

console.log(`Adição ${a+b}`);
console.log(`Subtração ${a-b}`);
console.log(`Multiplicação ${a*b}`);
console.log(`Divisão ${a/b}`);
console.log(`Módulo ${a%b}`);

//Questão 2
//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const valueOne = 20;
const valueTwo = -5;
let show = '';

if (valueOne > valueTwo) {
    show = `The first value is the biggest one, being ${valueOne}`;
} 
if (valueTwo > valueOne) {
    show = `The second value is the biggest one, being ${valueTwo}`;
}
console.log(show);

// Questão Três
//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const valorUm = 5;
const valorDois = 10;
const valorTres = 15;
let maiorNumero = '';

if (valorUm > valorDois && valorUm > valorTres) {
    maiorNumero = `O valor um é o maior de todos, valendo ${valorUm}`;    
}
if (valorDois > valorUm && valorDois > valorTres) {
    maiorNumero = `O valor dois é o maior de todos, valendo ${valorDois}`;
}
if (valorTres > valorUm && valorTres > valorDois) {
    maiorNumero = `O valor três é o maior de todos, valendo ${valorTres}`;
}

console.log(maiorNumero);

//Questão quatro
//Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const valor = -1;

if (valor >= 0) {
    console.log("Valor positivo.");
}
else if (valor < 0) {
    console.log( "Valor negativo.");
} else {
    console.log('Zero')
}

//Questão cinco.
/*Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.*/ 

const angulo1 = 80;
const angulo2 = 50;
const angulo3 = 50;


let somaAngulos = angulo1 + angulo2 + angulo3;

if (somaAngulos === 180) {
    console.log('True');
} 
else if (somaAngulos < 0) {
    console.log('Erro, triângulo inválido.')
} else {
    console.log('False')
}


let somaPositiva = angulo1 > 0 && angulo2 > 0 && angulo3 > 0;

if (somaPositiva) {
    if (somaAngulos === 180) {
        console.log('True');
    }
    else if (somaPositiva != 180) {
        console.log('False')
    }

} else {
    console.log('Erro')
}

//Questão seis
//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let peao = '';

//ahhhhhhhhhh depois pelo amor de deus

//Questão sete
//Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.

let porcentagem = '95';
let conceito = '';

if (porcentagem >= 90) {
    conceito = 'A';
}
else if (porcentagem >= 80) {
    conceito = 'B';
}
else if (porcentagem >= 70) {
    conceito = 'C';
}
else if (porcentagem >= 60) {
    conceito = 'D';
}
else if (porcentagem >= 50) {
    conceito = 'E';
}
else if (porcentagem < 50) {
    conceito = 'F';
} else {
    console.log ('Deu erro, tu não fez a prova, né?')
}

console.log(`Sua nota foi ${conceito}`);

/*Questão oito
Escreva um programa que defina três números em constantes 
e retorne true se pelo menos uma das três for par. 
Caso contrário, ele retorna false .*/

const n1 = 2;
const n2 = 3;
const n3 = 5;

if (n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0) {
    console.log('true');
} else {
    console.log('false');
}

/*Questão nove
Escreva um programa que defina três números em constantes
e retorne true se pelo menos uma das três for ímpar. 
Caso contrário, ele retorna false .*/

const one = '2';
const two = '8';
const three = '11';

if (one % 2 !== 0 || two % 2 !== 0 || three % 2 !== 0) {
    console.log('true');
} else {
    console.log('false');
}




