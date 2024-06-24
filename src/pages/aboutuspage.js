import React from 'react'; // Import React from the React library
import './AboutUsPage.css'; // Import the CSS file for AboutUsPage styles

// Define the AboutUsPage component
const AboutUsPage = () => {
  return (
    <div className="about">
      <h1>About Us</h1> {/* Header for the About Us section */}
      <p>Our farm is dedicated to providing the highest quality products...</p> {/* Paragraph describing the farm */}
      <p>We have a variety of animal products such as milk, eggs, and cheese...</p> {/* Paragraph about animal products */}
      <p>Our farm products include fresh vegetables like tomatoes, carrots, and lettuce...</p> {/* Paragraph about farm products */}
      <p>Our mission is to ensure healthy and sustainable food for our community...</p> {/* Paragraph about the farm's mission */}
      <ul>
        <li>Milk</li> {/* List item for Milk */}
        <li>Eggs</li> {/* List item for Eggs */}
        <li>Cheese</li> {/* List item for Cheese */}
        <li>Tomatoes</li> {/* List item for Tomatoes */}
        <li>Carrots</li> {/* List item for Carrots */}
        <li>Lettuce</li> {/* List item for Lettuce */}
      </ul>
    </div>
  );
};

export default AboutUsPage; // Export the AboutUsPage component as the default export
