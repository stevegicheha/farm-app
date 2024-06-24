/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FarmProductsPage.css';

const FarmProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/farmProducts')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  return (
    <div className="products">
      <h1>Farm Products</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img src={`path/to/your/images/${product.toLowerCase()}.jpg`} alt={product} />
            <p>{product}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmProductsPage;
*/

import React from 'react'; // Import React from the React library
import './FarmProductsPage.css'; // Import the CSS file for FarmProductsPage styles

// Define the FarmProductsPage component
const FarmProductsPage = () => {
  // Define an array of farm products with their names and image paths
  const farmProducts = [
    { name: 'Tomatoes', image: 'assets/tomatoes.jpg' },
    { name: 'Carrots', image: 'assets/carrots.jpg' },
    { name: 'Lettuce', image: 'assets/lettuce.jpg' },
    // Add more products as needed
  ];

  return (
    <div className="farm-products">
      <h1>Farm Products</h1> {/* Header for the Farm Products section */}
      <div className="product-grid">
        {/* Map over the farmProducts array to display each product */}
        {farmProducts.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" /> {/* Display product image */}
            <div className="product-name">{product.name}</div> {/* Display product name */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmProductsPage; // Export the FarmProductsPage component as the default export


