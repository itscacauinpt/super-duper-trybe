// Exercício 1:
// Vamos modelar algumas partes de um software de uma escola.
// Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina.
// Cada objeto dessa classe deve conter os seguintes dados:
// matrícula, nome, 4 notas de prova, 2 notas de trabalho.

class Student {
  constructor(
    private _matricula: string,
    private _nome: string,
    private _provas: number[],
    private _trabalhos: number[],
  ) { }

  // adicionar e puxar atributos / set e get
  get matricula(): string {
    return this._matricula;
  }

  set matricula(matri: string) {
    this._matricula = matri;
  }

  get nome(): string {
    return this._nome
  }

  set nome(nome: string) {
    this._nome = nome;
  }

  get provas(): number[] {
    return this._provas;
  }

  set provas(notas: number[]) {
    if (notas.length > 4) {
      throw new Error(
        'Apenas 4 notas de provas possíveis.'
      )
    }

    this._provas = notas;
  }

  get trabalhos(): number[] {
    return this._trabalhos;
  }

  set trabalhos(notas: number[]) {
    if (notas.length > 2) {
      throw new Error(
        'Apenas 2 notas de trabalhos possíveis.'
      )
    }
    this._trabalhos = notas;
  }
}

const studentOne = new Student('2022000', 'Um nome aleatorio', [10, 10, 10, 10], [10, 10]);
// const studentOne = new Student('2022000');

console.log(studentOne);