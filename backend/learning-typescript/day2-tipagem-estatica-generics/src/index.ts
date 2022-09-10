// tupla
let aTupla: [string, number] = ['Cacau', 21];
let car: [string, string, number] = ['Ford', 'F400', 10];

// type alias
type Point = {
  x: number,
  y: number,
}
function printCoord(type: Point) {
  console.log('Ponto X: ' + type.x);
  console.log('Ponto X: ' + type.y);
}

// type unions
type Docs = {
  cpf: number | string,
  rg: number | string,
}
// type Cpf = number | string
function canReceiveMoreThanOneType(type: Docs) {
  console.log('uau ', + type.cpf);
  // console.log('uau ', + type);
}

// classes, definindo a forma de um objeto
enum EyesColour {
  black = 'black',
  green = 'green',
  gray = 'gray',
  brown = 'brown',
}
class Person {
  name: string;
  age: number;
  eyesColour: EyesColour;

  // constructor(name, age) { (parameter) age: any name: any
  constructor(name: string, age: number, eyesColour: EyesColour) {
    this.age = age;
    this.name = name;
    this.eyesColour = eyesColour;
  }

  speak(): void {
    console.log(`${this.name} está falando.`);
  }

  eat(): void {
      console.log(`${this.name} está comendo.`)
  }

  walk(): void {
      console.log(`${this.name} está andando.`)
  }
}
const aPerson = new Person('Cacau', 21, EyesColour.brown);
console.log(aPerson);
aPerson.speak()

// interfaces | o único trabalho de uma interface é descrever o objeto
interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}
interface Teacher extends Employee {
  firstName: string;
  lastName: string;
  subject: string;
  fullName(): string;
  sayHello(): string;
}