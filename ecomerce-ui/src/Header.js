import React from 'react';
import airbnbLogo from './airbnbLogo.png'

function Header(props) {
  const {countCartItems} = props;

  return (
    <header className="header">
      <div className="logo">
        <img className="airbnbLogoImg" src={airbnbLogo} alt=""></img>
        <p className="airbnbLogoType">airbnb</p>
      </div>
      {<div>
        <button className="cartButton">
          Shopping Cart {''}
          {countCartItems? (
            <div>{countCartItems}</div>
          ):('')
          }
         </button> 
      </div>}
    </header>
  )
}
export default Header