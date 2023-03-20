// `Class`: Student
// `Extends`: Person
// `Attributes`:
//     - enrollment: matrícula da pessoa estudante
//     - examsGrades: notas de provas
//     - worksGrades: notas de trabalhos
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e data de nascimento e
//       preencher a matrícula automaticamente
//     - sumGrades: retorna a soma das notas da pessoa estudante
//     - sumAverageGrade: retorna a média das notas da pessoa estudante
//     - generateEnrollment: retorna uma string única gerada
//       como matrícula para a pessoa estudante
// `Validations`:
//     - A matrícula deve possuir no mínimo 16 caracteres
//     - A pessoa estudante deve possuir no máximo 4 notas de provas
//     - A pessoa estudante deve possuir no máximo 2 notas de trabalhos

import Person from "./Person";

export default class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[];
  private _worksGrades: number[];

  public generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }

  constructor(name: string, birthdate: Date) {
    super(name, birthdate);

    this._enrollment = this.generateEnrollment();
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