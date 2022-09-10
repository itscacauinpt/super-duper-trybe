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
enum Phrase {
  sit = 'sit',
  talk = 'talk',
  rollOver = 'roll over',
}

enum Race {
  viralata = 'viralata',
  akita = 'akita',
  beagle = 'beagle',
  chowchow = 'chowchow',
}

interface Doguin {
  name: string,
  race: Race,
  age: number,
  vacinated: boolean,
}

class Doguin {
  constructor(name: string, race: Race, age: number, vacinated: boolean) {
    this.age = age;
    this.vacinated = vacinated;
    this.race = race;
    this.name = name;
  }

  do(phrase: string) {
    return `${this.name}, ${phrase}!`;
  }
}

const aDoguin = new Doguin('Castle', Race.viralata, 4, true);
console.log(aDoguin.do(Phrase.sit));

// Crie uma classe cujo objeto represente uma Casa.
enum Situation {
  TOSELL = 'to sell',
  SELLED = 'selled',
  INCONSTRUCTION = 'in construction',
  CONSTRUCTED = 'constructed',
}

enum City {
  NY = 'New York',
  WDC = 'Washington DC',
  CAL = 'California',
}

interface House {
  name: string,
  situation: Situation,
  city: City,
  number: number,
}

class House {
  constructor(name: string, city: City, number: number, situation: Situation) {
    this.name = name;
    this.city = city;
    this.number = number;
    this.situation = situation;
  }

  product(owner: string) {
    return `The ${this.name}'s situations: ${this.situation}. As ${owner} informed.`;
  }
}

const aOwner = new House('House of Springs', City.CAL, 327, Situation.SELLED);
console.log(aOwner.product('Mrs. Smith'));

// Crie uma classe cujo objeto represente um Voo.
enum Brand {
  LATAM = 'LATAM',
  OUTRAMARCA = 'OUTRAMARCA',
}
enum Situation {
  CANCELED = 'canceled',
  LOSTED = 'losted',
  ARRIVED = 'arrived',
}

interface Voo {
  number: number,
  brand: Brand,
  situation: Situation,
}

class Voo {
  constructor(number: number, brand: Brand, situation: Situation) {
    this.number = number;
    this.brand = brand;
    this.situation = situation;
  }

  printFly() {
    return `The fly #${this.number} from ${this.brand} is ${this.situation}.`
  }
}

const aFly = new Voo(455, Brand.LATAM, Situation.CANCELED);
console.log(aFly.printFly());