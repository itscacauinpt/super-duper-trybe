// Crie uma interface cujo objeto represente um Automóvel.
interface automobile {
  brand: string,
  situation: string,
  serie: number,
  turnOn: () => void;
  turnOff: () => void;
  speedUp: () => void;
  speedDown: () => void;
  break: () => void;
}

// Crie uma interface cujo objeto represente um Felino.
interface Feline {
  name: string;
  pet: boolean;
  category?: string,
  walk: () => void;
  hunt: () => void;
  eat: () => void;
  sleep: () => void;
}

// Crie uma interface cujo objeto represente uma Aeronave.
interface jet {
  model: string;
  brand: string;
  engines: number;
  turnOn: () => void;
  turnOff: () => void;
  speedUp: () => void;
  speedDown: () => void;
  break: () => void;
}
