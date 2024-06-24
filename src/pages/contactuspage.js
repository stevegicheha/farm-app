import React, { useState, useEffect } from 'react';  // Import React and hooks useState, useEffect from React library
import axios from 'axios';  // Import axios for making HTTP requests
import './ContactUsPage.css';  // Import the CSS file for ContactUsPage styles

// Define the ContactUsPage component
const ContactUsPage = () => {
  const [contactInfo, setContactInfo] = useState({});  // Declare a state variable to hold contact information

  useEffect(() => {
    // Fetch contact information from the server when the component mounts
    axios.get('http://localhost:5000/contactInfo')
      .then(response => {
        setContactInfo(response.data);  // Update state with the fetched contact information
      })
      .catch(error => {
        console.error('There was an error fetching the contact information!', error);  // Log any errors to the console
      });
  }, []);  // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p><strong>Address:</strong> {contactInfo.address}</p>  {/* Display the address */}
      <p><strong>Phone:</strong> {contactInfo.phone}</p>  {/* Display the phone number */}
      <p><strong>Email:</strong> {contactInfo.email}</p>  {/* Display the email */}
    </div>
  );
};

export default ContactUsPage;  // Export the ContactUsPage component as the default export
