import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/Landing';
import AboutPage from './components/About';
import CaseStudy from './components/CaseStudy';
import ContactPage from './components/Contact';
import ProductDesign from './components/ProductDesign';
import WebDesign from './components/WebDesign';
import MobileAppDesign from './components/MobileAppDesign';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router basename="/creationsbyabhishek"> {/* Important for GitHub Pages */}
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/CaseStudy" element={<CaseStudy />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/product-design" element={<ProductDesign />} />
        <Route path="/web-design" element={<WebDesign />} />
        <Route path="/mobile-app-design" element={<MobileAppDesign />} />
      </Routes>
    </Router>
  );
}

export default App;