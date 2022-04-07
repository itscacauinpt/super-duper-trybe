import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemon: { name, type, averageWeigth, image } } = this.props;
    return (
      <div>
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
