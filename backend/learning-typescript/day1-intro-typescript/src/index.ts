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


