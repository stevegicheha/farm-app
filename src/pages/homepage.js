import React, { useEffect } from 'react';  // Import React and useEffect hook from React library
import './HomePage.css';  // Import the CSS file for HomePage styles

// Define the HomePage component
const HomePage = () => {
  useEffect(() => {
    // Function to show slides in a slideshow
    let slideIndex = 0;
    const showSlides = () => {
      const slides = document.getElementsByClassName('slide'); // Get all elements with class 'slide'
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'; // Hide all slides
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1; // Reset slideIndex if it exceeds the number of slides
      }
      slides[slideIndex - 1].style.display = 'block'; // Display the current slide
      setTimeout(showSlides, 5000); // Change image every 5 seconds
    };
    showSlides(); // Call the showSlides function to start the slideshow
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className="home">
      <div className="slideshow">
        <div className="slide">
          <img src="images/image1.jpg" alt="Farm Product 1" /> {/* Image for slide 1 */}
        </div>
        <div className="slide">
          <img src="images/image2.jpg" alt="Farm Product 2" /> {/* Image for slide 2 */}
        </div>
        <div className="slide">
          <img src="images/image3.jpg" alt="Farm Product 3" /> {/* Image for slide 3 */}
        </div>
        <div className="slide">
          <img src="images/image4.jpg" alt="Farm Product 3" /> {/* Image for slide 4 */}
        </div>
      </div>
      <div className="home-buttons">
        <button><a href="/about">About Us</a></button> {/* Button to navigate to About Us page */}
        <button><a href="/animal-products">Animal Products</a></button> {/* Button to navigate to Animal Products page */}
        <button><a href="/farm-products">Farm Products</a></button> {/* Button to navigate to Farm Products page */}
        <button><a href="/contact">Contact Us</a></button> {/* Button to navigate to Contact Us page */}
      </div>
    </div>
  );
};

export default HomePage;  // Export the HomePage component as the default export
