import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Location extends Component {
  static propTypes = {
    location: PropTypes.shape({
      city: PropTypes.string,
      country: PropTypes.string
    })
  }
  
  render () {
    const {location} = this.props;

    return (
      <div>
        {location.city}, {location.country}
      </div>
    );
  }
};

export default Location;
