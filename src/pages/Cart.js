import React, { useContext } from 'react';
import { CartContext } from '../CartContext'; 
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);


  const totalPrice = cart.reduce((total, car) => {
    return total + (Number(car.price) || 0); 
  }, 0);

  // notification at removal of car from cart
  const handleRemoveFromCart = (carId) => {
    alert('Item removed from cart');
    removeFromCart(carId);
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cart.length > 0 ? (
        <div className="cart-content">
          {cart.map(car => (
            <div key={car.id} className="cart-item">
              <img src={car.image_url} alt={car.model} />
              <div className="cart-details">
                <h2>{car.model}</h2>
                <p>Price: ${car.price}</p>
                <button onClick={() => handleRemoveFromCart(car.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <span>Total Products:</span>
            <span>{cart.length}</span>
          </div>
          <div className="cart-total">
            <span>Total Price:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      ) : (
        <p className="empty-cart">Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
