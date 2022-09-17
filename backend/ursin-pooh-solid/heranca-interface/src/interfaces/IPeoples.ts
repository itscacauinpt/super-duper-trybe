// atributos e/ou métodos referentes a uma classe
export default interface IPeoples {
  _name: string;
  // height: number; // interface implica public
  printName(value: string): void;
}