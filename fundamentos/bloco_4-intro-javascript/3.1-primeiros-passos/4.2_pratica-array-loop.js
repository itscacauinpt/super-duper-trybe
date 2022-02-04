//one
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}

//two

//x += y é o mesmo que x = x + y

let soma = 0;

for (let i = 0; i < numbers.length; i += 1) {
    
    console.log(soma = soma + numbers[i]);
}

//three

let media = 0;

for (let i = 0; i < numbers.length; i += 1) {
    media = soma / i;
    //console.log(media = soma / i);
}

console.log(media);

//four

if (soma > 20) {
    console.log('Valor maior que 20.'); 
} else {
    console.log('Valor menor ou igual a 20.'); 
}

//five

let maiorValor = numbers[0];

for (let i = 0; i < numbers.length; i += 1) {
    if (maiorValor < numbers[i]) {
        maiorValor = numbers[i];
    };    
}
console.log(maiorValor);


/*
descubra qual o maior valor contido no array 
comparar cada um dos numeros do array passando pelo array com o loop do for, 
se a variavel maiorvalor for menor que o numero que 
estiver passando, esse é o maior numero.
senão sei lá
*/

//six

let impar = 0;
let impares = [];

for (let i = 0; i < numbers.length; i +=1) {
    if (numbers[i] % 2 != 0) {
        impar = numbers[i];
        impares.push(impar);
    }
     if (numbers[i] % 2 === 0) {
        console.log('Nenhum valor ímpar.');
         
    }
}
console.log(impares);

//seven

let menorValor = numbers[0];

for (i = 0; i < numbers.length; i += 1) {
    if (menorValor > numbers[i]) {
        menorValor = numbers[i];
    }
}
console.log(menorValor);

//eigth

