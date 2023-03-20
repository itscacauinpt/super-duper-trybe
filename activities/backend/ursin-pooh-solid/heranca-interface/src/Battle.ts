import Elves from "./Elves";
import Hobbit from "./Hobbit";

// using the classes that already exists to create something else
export default class Battle {
  private battlename: string;
  private hobbit: Hobbit[] = [];
  private elves: Elves[] = [];

  constructor(name: string) {
    this.battlename = name;
  }

  /**
   * createHobbits
   */
  public createHobbits(hobbits: number) {
    return `Creating ${hobbits} into the battle.`
  }

  /**
   * createElves
   */
  public createElves(elves: number) {
    return `Creating ${elves} into the battle.`
  }
}

const aBattle = new Battle('A última batalha');
aBattle.createElves(10);
aBattle.createHobbits(10);