// Exercício 1:
// Vamos modelar algumas partes de um software de uma escola.
// Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina.
// Cada objeto dessa classe deve conter os seguintes dados:
// matrícula, nome, 4 notas de prova, 2 notas de trabalho.
var Student = /** @class */ (function () {
    function Student(_matricula, _nome, _provas, _trabalhos) {
        this._matricula = _matricula;
        this._nome = _nome;
        this._provas = _provas;
        this._trabalhos = _trabalhos;
    }
    Object.defineProperty(Student.prototype, "matricula", {
        // adicionar e puxar atributos / set e get
        get: function () {
            return this._matricula;
        },
        set: function (matri) {
            this._matricula = matri;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "provas", {
        get: function () {
            return this._provas;
        },
        set: function (notas) {
            if (notas.length > 4) {
                throw new Error('Apenas 4 notas de provas possíveis.');
            }
            this._provas = notas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "trabalhos", {
        get: function () {
            return this._trabalhos;
        },
        set: function (notas) {
            if (notas.length > 2) {
                throw new Error('Apenas 2 notas de trabalhos possíveis.');
            }
            this._trabalhos = notas;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var studentOne = new Student('2022000', 'Um nome aleatorio', [10, 10, 10, 10], [10, 10]);
// const studentOne = new Student('2022000');
console.log(studentOne);
