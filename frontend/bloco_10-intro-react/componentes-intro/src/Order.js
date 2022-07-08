import React from 'react';
import PropTypes from 'prop-types';

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

Order.propTypes = {
  user: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
};

export default Order;
