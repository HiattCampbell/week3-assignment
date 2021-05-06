import React, { Component } from 'react';
import Location from './Location';
import Payment from './Payment'
import Host from './Host'
import Rating from './Rating'
import SuperHost from './SuperHost'

class AirBnbListing extends Component {
  render() {
    const {listing, onAdd} = this.props
    return (
      <div className="listings">
        <div className="superHostContainer">
          <img className="img" src={listing.image} alt=""/>
          <SuperHost host={listing.host} />
        </div>
        <div className="listingInfo">
          <div className="listingLocation gray">
          {listing.houseType} in&nbsp;
          <Location location={listing.location}/>
          </div>
          <div className="listingTitle">{listing.title}</div>
          <hr id="listingTitleHr"></hr>
          <Host host={listing.host}/>
          <div className="listingBottom">
            <Rating rating={listing.rating} />
            <div className="listingPayment">
              <Payment payment={listing.payment} />
              <button onClick={() => onAdd(listing)}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
      

      
    )
  }
}

export default AirBnbListing;