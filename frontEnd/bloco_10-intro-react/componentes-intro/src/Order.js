import React from 'react';

class Order extends React.Component {
  render() {
    const {nam, user, product, price} = this.props.order;
    return (
      <div className='order'>
        <p>{nam} ({user}), bought {product} for {price.value} {price.currency}.</p>
      </div>
    )
  }
}

export default Order;
