import IEquipament from "./interfaces/IEquipament";

export default class Equipament implements IEquipament {
  _name: string;
  _power: number;

  constructor(name: string, power: number) {
    this._name = name;

    if (power <= 0) throw new Error('Invalid.')

    this._power = power;
  }

  /**
   * use equipament, public cause not only the sub classes should use it
   */
  public use(action: string): void {
    console.log(`Using ${this._name}. Action: ${action}`);
  }
}