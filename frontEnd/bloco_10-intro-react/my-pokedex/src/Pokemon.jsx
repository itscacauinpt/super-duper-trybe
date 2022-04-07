import React from 'react';
// Esse componente recebe como entrada um objeto que contém informações referentes a um pokemon específico.

class Pokemon extends React.Component {
  render() {
    const { pokeParam: { name, type, averageWeigth, image } } = this.props; // pokeParam={thePoke}
    return (
      <div className='PokeBox'>
        <p>{name}</p>
        <p>{type}</p>
        <p>{averageWeigth}</p>
        <img src={ image } alt={ `${name} sprite` } />
      </div>
    )
  }
}

// proptypes

export default Pokemon;
