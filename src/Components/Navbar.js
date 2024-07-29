import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav id="navbar">   
      <ul>
        <li id="page-link"><Link to="/">Home</Link></li>
        <li id="page-link"><Link to="/Autos">Autos</Link></li>
        <li id="page-link"><Link to="/cart">Cart</Link></li>
        <li id="page-link"><Link to="/Checkout">Checkout</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
