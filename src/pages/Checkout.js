import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext'; 
import './Checkout.css'; 

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [payment, setPayment] = useState('');

  
  const totalPrice = cart.reduce((total, car) => {
    const price = parseFloat(car.price) || 0; 
    return total + price;
  }, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Checkout submitted:', { name, address, payment });
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit} className="checkout-form">
        <label>
          Name:
          <br />
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
       
        <label>
          Address:
          <br />
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </label>
        
        <label>
          Payment Information:
          <br />
          <input type="text" value={payment} onChange={(e) => setPayment(e.target.value)} required />
        </label>

        <button type="submit">Complete Purchase</button>
      </form>
      <div className="checkout-total">
        <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Checkout;
