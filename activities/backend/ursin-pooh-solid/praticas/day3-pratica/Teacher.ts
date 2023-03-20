// `Class`: Teacher
// `Extends`: Employee
// `Attributes`:
//     - subject: a disciplina lecionada pela pessoa professora
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome, data de nascimento, salário e a disciplina
// `Validations`:
//     - A matrícula deve possuir no mínimo 16 caracteres
//     - O salário não pode ser negativo.
//     - A data de admissão não pode ser no futuro

import Employee from './Employee';

export default class Teacher extends Employee {
  _subject: string;

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `PRF${randomStr}`;
  }

  constructor(name: string, birthdate: Date,
    salary: number, subject: string, admissionDate: Date) {
    super(name, birthdate, salary, admissionDate);

    this._subject = subject;
  }

  get subject(): string {
    return this._subject;
  }

  set subject(sub: string) {
    this._subject = sub;
  }
}