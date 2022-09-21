// Abstract
// now we cant instanciar anymore, its just a "base"

abstract class Person {
  _name: string;
  _birthdate: Date;

  constructor(name: string,
    birthdate: Date) {
    this._name = name;
    this._birthdate = birthdate;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    // if (name.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
    this.validateName(name);
    this._name = name;
  }

  get birthdate(): Date {
    return this._birthdate;
  }

  set birthdate(date: Date) {
    this.validateBirthDate(date);
    this._birthdate = date;
  }

  private validateName(name: string): void {
    if (name.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
  }

  private validateBirthDate(date: Date): void {
    const theDate = date.getTime();
    const presentDay = new Date().getTime();
    if (theDate > presentDay) throw new Error('A data de nascimento não pode ser uma data no futuro');
  }

  protected getAge(date: Date): number {
    const theDate = date.getTime();
    const currentYear = new Date().getTime();

    const theAge = (currentYear - theDate) / 31_536_000_000;

    return theAge;
  }
}

export default Person;