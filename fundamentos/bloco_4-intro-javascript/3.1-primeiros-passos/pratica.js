//Questão 1

const a = 10;
const b = 20;

console.log(`Adição ${a+b}`);
console.log(`Subtração ${a-b}`);
console.log(`Multiplicação ${a*b}`);
console.log(`Divisão ${a/b}`);
console.log(`Módulo ${a%b}`);

//Questão 2

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

//

