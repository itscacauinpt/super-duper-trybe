// Crie uma classe cujo objeto represente um Heroi.
interface Hero {
  _name: string,
  _power: string,
  quote(p: string): string, 
}

class Hero {
  // _name: string;
  // _power: string;

  constructor(name: string, power: string) {
    // variáveis no escopo da classe
    this._name = name;
    this._power = power;
  }

  quote(phrase: string) {
    return `${this._name} diz: ${phrase}`
  }
}

const aHero = new Hero('Capitao Caverna', 'esqueci');
const anotherHero = new Hero('Capitao Cueca', 'ser estranho');

console.log(aHero.quote('CAPITAO CAVERNAAA'));
console.log(aHero.quote('ah sei lá'));

// Crie uma classe cujo objeto represente um Cachorro.
enum Race {
  viralata = 'viralata',
  
}
interface Doguin {
  race: Race,
  age: number,
  vacinated: boolean,
}
class Doguin {

}

// Crie uma classe cujo objeto represente uma Casa.


// Crie uma classe cujo objeto represente um Voo.