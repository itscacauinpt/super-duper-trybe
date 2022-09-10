// tupla
var aTupla = ['Cacau', 21];
var car = ['Ford', 'F400', 10];
function printCoord(type) {
    console.log('Ponto X: ' + type.x);
    console.log('Ponto X: ' + type.y);
}
// type Cpf = number | string
function canReceiveMoreThanOneType(type) {
    console.log('uau ', +type.cpf);
    // console.log('uau ', + type);
}
// classes, definindo a forma de um objeto
var EyesColour;
(function (EyesColour) {
    EyesColour["black"] = "black";
    EyesColour["green"] = "green";
    EyesColour["gray"] = "gray";
    EyesColour["brown"] = "brown";
})(EyesColour || (EyesColour = {}));
var Person = /** @class */ (function () {
    // constructor(name, age) { (parameter) age: any name: any
    function Person(name, age, eyesColour) {
        this.age = age;
        this.name = name;
        this.eyesColour = eyesColour;
    }
    Person.prototype.speak = function () {
        console.log("".concat(this.name, " est\u00E1 falando."));
    };
    Person.prototype.eat = function () {
        console.log("".concat(this.name, " est\u00E1 comendo."));
    };
    Person.prototype.walk = function () {
        console.log("".concat(this.name, " est\u00E1 andando."));
    };
    return Person;
}());
var aPerson = new Person('Cacau', 21, EyesColour.brown);
console.log(aPerson);
aPerson.speak()
// 
