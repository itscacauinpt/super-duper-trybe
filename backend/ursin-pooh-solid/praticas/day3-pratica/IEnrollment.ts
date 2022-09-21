// A: Transforme nossa interface de pessoa funcionária em uma classe de pessoa funcionária que herda da nossa classe pessoa.
// B: Faça com que nossa classe de pessoa professora herde da classe de pessoa funcionária.
// C: Por último crie uma nova interface que será implementada por nossas classes pessoa estudante e pessoa funcionária que dirá que a instância delas deve ser matriculável.

// `Interface`: Enrollable
// `Attributes`:
//     - enrollment: identificador único da matrícula
// `Methods`:
//     - generateEnrollment: retorna uma string única gerada como matrícula

export default interface Enrollable {
  _enrollment: string;
  generateEnrollment(): string;
}