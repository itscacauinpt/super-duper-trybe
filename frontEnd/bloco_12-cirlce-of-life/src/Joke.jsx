import React from 'react';

class Joke extends React.Component {
  render() {
    const { jokeObj, saveJoke } = this.props;
    return (
      <div> 
        <p>{jokeObj}</p>
        <button type="button" onClick={ saveJoke }>
          Salvar piada!
        </button>
      </div>
    );
  }
}

export default Joke;