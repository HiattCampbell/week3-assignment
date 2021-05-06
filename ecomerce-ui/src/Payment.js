import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Payment extends Component {
  static propTypes = {
    payment: PropTypes.shape({
      cost: PropTypes.number,
      description: PropTypes.string
    })
  }
  
  render () {
    const {payment} = this.props;

    return (
      <div className="paymentContainer">
        <div className="bold">${payment.cost}</div> 
        <div>&nbsp;/ night</div>
      </div>
    );
  }
};

export default Payment;
