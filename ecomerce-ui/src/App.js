import React, { useState } from 'react';
import './App.css';
import airbnbs from './_data/airbnbs.json';
import AirBnbListing from './AirBnbListing';
import Header from './Header';
import ShoppingCart from './ShoppingCart'

function App() {
  const [cartItems, setCartItems] = useState([]); 
  
  function onAdd(listing) {
    const exist = cartItems.find(x => x.title === listing.title);
    if(exist) {
      setCartItems(
        cartItems.map((x) => x.title === listing.title ? { ...exist, qty: exist.qty +1 } : x 
        )
      );
    } else {
      setCartItems([...cartItems, { ...listing, qty: 1 }])
    }
  };

  function onRemove(listing) {
    const exist = cartItems.find(x => x.title === listing.title);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.title !== listing.title));
    } else {
      setCartItems (
        cartItems.map((x) => x.title === listing.title ? { ...exist, qty: exist.qty -1 } : x 
        )
      );
    }
  }
  
  return (
    <div className="App">
      <Header 
      countCartItems={cartItems.length} 
      className="head"
      />
      <hr className="headerHr"></hr>
      <h1 className="staysTitle">Stays around the world</h1>
      <hr></hr>
      <div className="listingsAndCart" onAdd={onAdd}>
        <div className="listingsContainer">
          {airbnbs.map((listing) => {
            return (
              <div>
              <AirBnbListing 
                listing={listing} 
                key={listing.title} 
                onAdd={onAdd}/>
              <hr className="listingHr"></hr>
              </div>
            )
          })}
        </div>
        <div className="cartContainer">
          <ShoppingCart 
            onAdd={onAdd} 
            onRemove={onRemove}
            cartItems={cartItems}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
