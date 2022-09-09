"use strict";
let yes = true;
let no = false;
let aNumber = 10;
let aString = 'yay';
// ausência de um valor
function sayYay() {
    console.log('yay');
}
let nullValue = null;
let undefinedValue = undefined;
const emptyObj = {};
// const anUndefinedProperty: undefined = emptyObj[meh];
const anObject = {
    text: null,
};
var aStatus;
(function (aStatus) {
    aStatus[aStatus["active"] = 0] = "active";
    aStatus[aStatus["inactive"] = 1] = "inactive";
    aStatus[aStatus["paused"] = 2] = "paused";
})(aStatus || (aStatus = {}));
let somebody = aStatus.active;
console.log(somebody);
var theATeam;
(function (theATeam) {
    theATeam[theATeam["OK"] = 200] = "OK";
    theATeam[theATeam["BadRequest"] = 400] = "BadRequest";
    theATeam[theATeam["Unauthorized"] = 401] = "Unauthorized";
    theATeam[theATeam["PaymentRequired"] = 402] = "PaymentRequired";
    theATeam[theATeam["Forbidden"] = 403] = "Forbidden";
    theATeam[theATeam["NotFound"] = 404] = "NotFound";
})(theATeam || (theATeam = {}));
const ok = theATeam.OK;
const indiceOk = theATeam["OK"];
const stringBadRequest = theATeam[400];
console.log(ok); //saída: 200
console.log(indiceOk); //saída: 200
console.log(stringBadRequest); //saída: BadRequest
