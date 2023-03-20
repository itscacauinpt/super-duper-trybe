// sendo redundante :v

let symbol: symbol = Symbol('qualquer-símbolo');

// let big: bigint = 10n;

let yes: boolean = true;
let no: boolean = false;

let aNumber: number = 10;

let aString: string = 'yay';

// ausência de um valor
function sayYay(): void {
  console.log('yay');
}

let nullValue = null;
let undefinedValue = undefined;
const emptyObj = {};
// const anUndefinedProperty: undefined = emptyObj[meh];
const anObject = {
  text: null,
};

enum aStatus {
  active = 0,
  inactive,
  paused,
}
let somebody: aStatus = aStatus.active;
console.log(somebody);

enum theATeam {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
}
const ok = theATeam.OK;
const indiceOk = theATeam["OK"];
const stringBadRequest = theATeam[400];
console.log(ok); //saída: 200
console.log(indiceOk); //saída: 200
console.log(stringBadRequest); //saída: BadRequest

//

let arrayNumbers: Array<number> = [1, 2, 3];
let arrayNumbers2: number[] = [1, 2, 3];
let arrayStrings: Array<string> = ['1', '2', '3'];
let arrayStrings2: string[] = ['1', '2', '3'];

// objeto - ? chave opcional
let umObjeto: { name: string, age: number, adult?: boolean } = {
  name: 'Cacau',
  age: 20,
};
// console.log(umObjeto.nome);
console.log(umObjeto.name);

// function aFunction(x: number, y: number): number // inferencia
function aFunction(x: number, y: number) {
  return 2+2;
}
const anotherFunc: (x: number, y: number) => number = (x, y) => x + y;


