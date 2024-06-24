// Importing React to use JSX syntax and create components.
import React from 'react';

// Importing the CSS file to apply styles specific to this component.
import './Footer.css';

// Defining the Footer component as a functional component.
const Footer = () => {
  // The component returns JSX that represents the footer section of the web page.
  return (
    <footer className="footer">
      {/* Displaying a paragraph with the current year and company information. */}
      <p>&copy; {new Date().getFullYear()} Farm Company. All Rights Reserved.</p>
    </footer>
  );
};

// Exporting the Footer component to use it in other parts of the application.
export default Footer;
