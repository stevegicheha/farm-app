import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage';
import AboutUsPage from './pages/aboutuspage';
import AnimalProductsPage from './pages/animalproductspage';
import FarmProductsPage from './pages/farmproductspage';
import ContactUsPage from './pages/contactuspage';
import Header from './components/header';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/animal-products" element={<AnimalProductsPage />} />
          <Route path="/farm-products" element={<FarmProductsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
