// A primeira função que vamos desenvolver recebe um nome e o imprime na tela com o texto “Olá Nome”.
export function greeter(name: string):string {
  return `Olá ${name}!`;
}

// A segunda função que vamos desenvolver irá mostrar na tela o nome da pessoa e sua idade.
export function person(name:string, age: number):string {
  return `${name} tem ${age} anos!`;
}

export function add(x: number,y: number):number {
  return x + y;
}

export function sumCalc(numbersToCalc: number[]): number {
  return numbersToCalc.reduce(add, 0);
}

// área de um triangulo
export function calcTri(base: number, height: number): number {
  return (base * height) / 2;
}

// área quadrado
export function calcQuad(side: number): number {
  return side ** 2;
}

// área retângulo
export function calcRect(base: number, height: number): number {
  return base * height;
}