import React from "react";
import Pokemon from "./Pokemon"; // Esse componente recebe como entrada uma lista de pokemons para serem mostrados na tela.

class Pokedex extends React.Component {
  render() {
    const { poke } = this.props; // poke={Poke} oh o parâmetro que coloquei no app.jsx sendo usado aqui!!
    return (
      <section className="Father">
        {poke.map(thePoke => <Pokemon key={thePoke.id} pokeParam={thePoke} />)}
      </section>
    )
  }
}

export default Pokedex;
