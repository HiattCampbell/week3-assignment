import React from 'react';

function ShoppingCart(props) {
  const {cartItems, onAdd, onRemove} = props;
  const itemsPrice = cartItems.reduce((a,c) => a + c.payment.cost * c.qty, 0)
  const taxPrice = itemsPrice * 0.1025;
  const totalPrice = itemsPrice + taxPrice;

  return (
    <div>
      <h2 className="cartItemsHeader">Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Shopping cart is empty</div>}
        {cartItems.map((item) => (
            <div className="addSpace" key={item.title}>
              <div>{item.title}</div>
              <div>
                <button onClick={()=>onAdd(item)}>+</button>
                <button onClick={()=>onRemove(item)}>-</button>
              </div>
              <div>
                {item.qty} x ${item.payment.cost.toFixed(2)}
              </div>
            </div>
        ))}
      </div>
      {cartItems.length !== 0 && (
        <>
          <hr></hr>
          <div className="addSpace">
              <div className="bold">Items Price</div>
              <div>${itemsPrice.toFixed(2)}</div>
          </div>
          <div className="addSpace">
              <div className="bold">Tax</div>
              <div>${taxPrice.toFixed(2)}</div>
          </div>
          <div className="addSpace">
              <div className="bold">Total Cost</div>
              <div>${totalPrice.toFixed(2)}</div>
          </div>
          <div>
            <button onClick={() => alert('Implement Checkout')}>
              Checkout
            </button>
          </div>
        </>  
      )}
    </div>
  )
}
export default ShoppingCart