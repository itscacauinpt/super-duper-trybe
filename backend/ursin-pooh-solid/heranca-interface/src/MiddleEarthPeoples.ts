import Equipament from "./Equipament";
import IPeoples from "./interfaces/IPeoples";

// super classe
export default class MiddleEarthPeoples implements IPeoples {
  // variáveis privates, encapsulando com setters e getters
  // ! assigned assertions, when its not defined in the constructor yet
  // public _name: String();
  public _name: string;
  protected _height: number;
  // protected is only available in a sub class, protegido, acessivel apenas pelas sub classes
  protected _languages: string[];
  protected _skills: Record<string,string>;
  private _equipament: Equipament[];

  // printName(value: string): void {
  //   throw new Error('Method not implemented.')
  // };

  constructor(name: string) {
    this._name = name;
    this._height = parseFloat((Math.random() * (2.1 - 0.6) + 0.6).toFixed(2));
    this._languages = ['Westron'];
    this._skills = {};

    const firstEquip = new Equipament('adaga enferrujada', 2)

    this._equipament = [firstEquip];
  }

  // get, from typescript
  get name(): string {
    return this._name;
  }

  get languages(): string[] {
    return this._languages;
  }

  get equipament(): Equipament[] {
    return this._equipament;
  }

  /**
   * getRandomHeight
   */
  protected getRandomHeight(min: number, max: number): number {
    const height = (Math.random() * (max - min) + min).toFixed(2);
    return parseFloat(height);
  }

  /**
   * printName, now implemented
   */
  public printName(value: string): void {
    console.log(value);
  }
}

const middPeople = new MiddleEarthPeoples('Caled');
// middPeople. | não tem acesso ao _languages e nem ao getRandomHeight


  /**
   * - Ele deve ter:
  - Nome
  - Altura
  - Lista de idiomas falados
  - Lista de habilidades adquiridas
  - Cada habilidade tem um nome e uma descrição.
  - Um nome dinâmico
  - Uma altura aleatória entre 60cm e 2,10m
  - A linguagem "Westron" Nos idiomas falados.
  - Nenhuma habilidade
   
  * Devemos poder APENAS LER os atributos:
      - Nome
      - Linguagens
    - Comportamentos
      - A classe deve possuir um método que gera uma altura baseada em um intervalo personalizado
      - A classe deve possuir um método que imprime o nome do personagem
   */