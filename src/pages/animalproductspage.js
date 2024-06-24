/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AnimalProductsPage.css';

const AnimalProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/animalProducts')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  return (
    <div className="products">
      <h1>Animal Products</h1>
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

export default AnimalProductsPage; 
*/

import React from 'react'; // Import React from the React library
import './AnimalProductsPage.css'; // Import the CSS file for AnimalProductsPage styles

// Define the AnimalProductsPage component
const AnimalProductsPage = () => {
  // Define an array of animal products with their names and image paths
  const animalProducts = [
    { name: 'Milk', image: 'assets/milk.jpg' },
    { name: 'Eggs', image: 'assets/eggs.jpg' },
    { name: 'Cheese', image: 'assets/cheese.jpg' },
  ];

  return (
    <div className="animal-products">
      <h1>Animal Products</h1> {/* Header for the Animal Products section */}
      <div className="product-grid">
        {/* Map over the animalProducts array to display each product */}
        {animalProducts.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" /> {/* Display product image */}
            <div className="product-name">{product.name}</div> {/* Display product name */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimalProductsPage; // Export the AnimalProductsPage component as the default export
