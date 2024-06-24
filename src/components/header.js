// Importing React to use JSX syntax and create components.
import React from 'react';

// Importing the Link component from react-router-dom to create navigation links.
import { Link } from 'react-router-dom';

// Importing the logo image file from the assets directory.
import logo from '../assets/logo.jpg';

// Importing the CSS file to apply styles specific to this component.
import './Header.css';

// Defining the Header component as a functional component.
const Header = () => {
  // The component returns JSX that represents the header section of the web page.
  return (
    <header className="header">
      {/* Displaying the logo image with a class for styling. */}
      <img src={logo} alt="Farm Logo" className="logo" />
      {/* Navigation section that contains an unordered list of links. */}
      <nav>
        <ul>
          {/* Each list item contains a Link component that navigates to different routes. */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/animal-products">Animal Products</Link></li>
          <li><Link to="/farm-products">Farm Products</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

// Exporting the Header component to use it in other parts of the application.
export default Header;
