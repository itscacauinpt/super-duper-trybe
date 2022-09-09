// ./index.ts

import * as Exercise from './exercises';

console.log(Exercise.greeter('Maria'));
console.log(Exercise.person('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumCalc([3, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.calcTri(10, 25)}cm²`);

console.log(`Quadrado de lado 10cm: ${Exercise.calcQuad(10)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.calcRect(10, 25)}cm²`);
