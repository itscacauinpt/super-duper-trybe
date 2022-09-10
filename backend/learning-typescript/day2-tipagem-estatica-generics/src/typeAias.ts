// Crie um type para um objeto que represente um pássaro.
enum pokeType {
  earth = 'earth',
  fly = 'fly',
  water = 'water',
  fire = 'fire',
}
type Pokemon = {
  type: pokeType,
  biped: boolean,
  evolute: boolean,
}

// Crie um type que represente uma função que recebe dois valores numéricos e retorne a soma deles.
type Values = {
  x: number,
  y: number,
  z?: number,
}
function sumThese(type: Values) {
  console.log('Resultado: ' + (type.x + type.y));
}

// Crie um type para um objeto que represente um endereço.
type Adress = {
  block: string,
  street: string,
  houseNum: number,
}
