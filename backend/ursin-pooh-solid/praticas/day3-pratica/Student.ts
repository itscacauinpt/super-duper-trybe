
// `Class`: Student
// `Extends`: Person
// `Implements`: Enrollable
// `Attributes`:
//     - examsGrades: notas de provas
//     - worksGrades: notas de trabalhos
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e data de nascimento e preencher a matrícula automaticamente
//     - sumGrades: retorna a soma das notas da pessoa estudante
//     - sumAverageGrade: retorna a média das notas da pessoa estudante
// `Validations`:
//     - A matrícula deve possuir no mínimo 16 caracteres
//     - A pessoa estudante deve possuir no máximo 4 notas de provas
//     - A pessoa estudante deve possuir no máximo 2 nostas de trabalhos

import Person from './Person';
import IEnrollment from './IEnrollment';

export default class Student extends Person implements IEnrollment {
  _examsGrades: number[] = [];
  _worksGrades: number[] = [];

  _enrollment: string;
  generateEnrollment(): string {
    throw new Error('Method not implemented.');
  }

  constructor(name: string, birthdate: Date) {
    super(name, birthdate);
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(enrollment: string) {
    this.validateEnrollment(enrollment);
    this._enrollment = enrollment;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(grades: number[]) {
    this.validateGrades(grades);
    this._examsGrades = grades;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set worksGrades(works: number[]) {
    this.validateWorks(works);
    this._worksGrades = works;
  }

  private validateWorks(works: number[]): void {
    if (works.length > 2) throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
  }

  private validateGrades(grades: number[]): void {
    if (grades.length > 4) throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
  }

  private validateEnrollment(enrollment: string): void {
    if (enrollment.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
  }
}