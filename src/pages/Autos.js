import React, { useEffect, useState, useContext, useRef } from 'react';
import axios from 'axios';
import { CartContext } from '../CartContext'; 
import './Autos.css';

const Autos = () => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState('');
  const { addToCart } = useContext(CartContext);
  const debounceRef = useRef(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cars');
        setCars(response.data);
      } catch (error) {
        setError('Failed to fetch data');
        console.error('Error fetching data:', error);
      }
    };

    fetchCars();
  }, []);

  const handleAddToCart = (car) => {
    console.log('Button clicked for car:', car);
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => {
      console.log('Adding to cart:', car);
      addToCart(car);
      window.alert(`Added ${car.model} to the cart!`); //notification
    }, 300); 
  };

 
  
  return (
    <div className="autos-container">
      {error && <p>{error}</p>}
      <div className="cars-grid">
        {cars.length > 0 ? (
          cars.map(car => (
            <div className="car-card" key={car.id}>
              <div className="car-image">
                <img src={car.image_url} alt={car.model} />
              </div>
              <div className="car-details">
                <h2>{car.model}</h2>
                <p><strong>Price:</strong> ${car.price}</p>
                <p><strong>Color:</strong> {car.color}</p>
                <p><strong>Year:</strong> {car.year}</p>
                <p><strong>Mileage:</strong> {car.mileage} miles</p>
                <p><strong>Transmission:</strong> {car.transmission}</p>
                <p><strong>Fuel Type:</strong> {car.fuel_type}</p>
                <p><strong>Status:</strong> {car.status}</p>
                <p><strong>Description:</strong> {car.description}</p>
                <button onClick={() => handleAddToCart(car)}>Add to Cart</button>
              </div>
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default Autos;
