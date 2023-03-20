"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcRect = exports.calcQuad = exports.calcTri = exports.sumCalc = exports.add = exports.person = exports.greeter = void 0;
// A primeira função que vamos desenvolver recebe um nome e o imprime na tela com o texto “Olá Nome”.
function greeter(name) {
    return `Olá ${name}!`;
}
exports.greeter = greeter;
// A segunda função que vamos desenvolver irá mostrar na tela o nome da pessoa e sua idade.
function person(name, age) {
    return `${name} tem ${age} anos!`;
}
exports.person = person;
function add(x, y) {
    return x + y;
}
exports.add = add;
function sumCalc(numbersToCalc) {
    return numbersToCalc.reduce(add, 0);
}
exports.sumCalc = sumCalc;
// área de um triangulo
function calcTri(base, height) {
    return (base * height) / 2;
}
exports.calcTri = calcTri;
// área quadrado
function calcQuad(side) {
    return side ** 2;
}
exports.calcQuad = calcQuad;
// área retângulo
function calcRect(base, height) {
    return base * height;
}
exports.calcRect = calcRect;
