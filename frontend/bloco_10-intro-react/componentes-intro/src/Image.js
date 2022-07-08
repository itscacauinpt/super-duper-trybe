import React from 'react';

class Image extends React.Component {
  render() {
    return <img className='imagem' src={this.props.source} alt={this.props.alternativeText}></img>
  }
}

export default Image;
