import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarIcon from '@material-ui/icons/Star';

class Rating extends Component {
  static propTypes = {
    rating: PropTypes.shape({
      stars: PropTypes.number,
      reviews: PropTypes.number
    })
  }
  
  render () {
    const {rating} = this.props;

    return (
      <div >
        <div className="rating">
          <StarIcon className="starIcon" />
          <div className="bold">{rating.stars}</div> 
          <div className="gray">&nbsp;({rating.reviews} reviews)</div>
        </div>
      </div>
    );
  }
};

export default Rating;