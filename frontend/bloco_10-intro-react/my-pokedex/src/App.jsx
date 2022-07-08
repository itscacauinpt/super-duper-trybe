import './App.css';
import React from 'react';
import Poke from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
  render() {
    return (
      <>
      <header className='App'>
        <h1>Pokedex</h1>
      </header>
      <main className='Main'>
      <Pokedex poke={Poke}/>
      </main>
      </>
    )
  }
}

export default App;

// <div className='App'>mano{Data.map(ele => ele.name)}</div>
