import MiddleEarthPeoples from "./MiddleEarthPeoples";

export default class Elves extends MiddleEarthPeoples {
  private _imortality: boolean;
  private _wisdom: number;
  private _combat: number;

  constructor(name: string) {
    super(name);
    super._height = this.getRandomHeight(0.6, 1.20);
    super._languages.push('Hobbitish');

    this._imortality = true;
    this._wisdom = 69;
    this._combat = 8001;
  }

  get imortality(): boolean {
    return this._imortality;
  }

  get wisdom(): number {
    return this._wisdom;
  }

  get combat(): number {
    return this._combat;
  }
}

const character = new Elves('Cacau');
console.log(character.printName);
console.log(character.combat);
console.log(character.languages);