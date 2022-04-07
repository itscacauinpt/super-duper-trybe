import './App.css';
import React from 'react';
import Poke from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
  render() {
    return (
      <>
      <div className='App'>
        Hey, mano
        <h1>Pokedex</h1>
        <Pokedex pokemons={Poke}/>
      </div>
      </>
    )
  }
}

export default App;

// <div className='App'>mano{Data.map(ele => ele.name)}</div>
