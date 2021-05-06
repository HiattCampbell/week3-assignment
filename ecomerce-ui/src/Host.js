import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Host extends Component {
  static propTypes = {
    host: PropTypes.shape({
      name: PropTypes.string,
      isSuperhost: PropTypes.bool
    })
  }
  
  render () {
    const {host} = this.props;

    return (
      <div>
        <div>Host: {host.name}</div>
      </div>
    );
  }
};

export default Host;