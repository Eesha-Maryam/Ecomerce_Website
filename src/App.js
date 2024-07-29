import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Autos from './pages/Autos';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout'; 
import Navbar from './Components/Navbar'; 
import { CartProvider } from './CartContext'; 
import './App.css';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/autos" element={<Autos />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} /> 
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;
