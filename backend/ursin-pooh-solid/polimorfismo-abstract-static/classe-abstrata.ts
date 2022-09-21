// Crie uma classe abstrata Character que tenha os métodos abstratos
// talk(): void e specialMove(): void.
abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}

// Crie a classe concreta MeleeCharacter que estenda Character
// e sobrescreva os métodos abstratos dessa classe.
class aCharacter extends Character {
  constructor(
    private _char: string,
    private _special_move: string,
  ) { super(); }

  talk(): void {
    // throw new Error("Method not implemented.");
    console.log(`Repete comigo: ${this._char}`);
  }
  specialMove(): void {
    // throw new Error("Method not implemented.");
    console.log(`E esse é o ${this._special_move}!`);
  }
}

// ai eu pulei o outro :v

// Crie uma função que receba como parâmetro character: Character
// e chame os métodos talk e specialMove para apresentar o personagem.
function characterPresentation(character: Character) {
  character.talk();
  character.specialMove();
}

const koda = new aCharacter('koda', 'mortífero golpe do pé na orelha');

characterPresentation(koda);
