// `Class`: Employee
// `Extends`: Person
// `Implements`: Enrollable
// `Attributes`:
//     - salary: valor do salário
//     - admissionDate: data de admissão
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome, data de nascimento, salário e preencher a matrícula automaticamente
// `Validations`:
//     - A matrícula deve possuir no mínimo 16 caracteres
//     - O salário não pode ser negativo.
//     - A data de admissão não pode ser no futuro

import Person from './Person';
import IEnrollment from './IEnrollment';

export default class Employee extends Person implements IEnrollment {
  _salary: number;
  _admissionDate: Date;

  _enrollment: string;
  generateEnrollment(): string {
    throw new Error('Method not implemented.');
  }

  constructor(name: string, birthdate: Date, salary: number, admissionDate: Date) {
    super(name, birthdate);

    this._salary = salary;
    this._admissionDate = admissionDate;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) throw new Error('O salário não pode ser negativo.');

    this._salary = value;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) throw new Error('A data de admissão não pode ser uma data no futuro.');

    this._admissionDate = value;
  }

}