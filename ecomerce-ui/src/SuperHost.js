import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SuperHost extends Component {
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
          {host.isSuperhost === true 
          ? <div className="superHost">SUPER HOST</div>
          : null}
          </div>
    );
  }
};

export default SuperHost;