import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import SecurityServices from './pages/SecurityServices';
import CleaningServices from './pages/CleaningServices'; // Main selection page
import DomesticCleaning from './pages/DomesticCleaning'; // New separate page
import CommercialCleaning from './pages/CommercialCleaning'; // New separate page
import Areas from './pages/Areas';
import Contact from './pages/Contact';
import AiAssistant from './components/AiAssistant';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-body">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/security" element={<SecurityServices />} />
            
            {/* Cleaning Routes */}
            <Route path="/cleaning" element={<CleaningServices />} />
            <Route path="/cleaning/domestic" element={<DomesticCleaning />} />
            <Route path="/cleaning/commercial" element={<CommercialCleaning />} />
            
            <Route path="/areas" element={<Areas />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <AiAssistant />
      </div>
    </Router>
  );
};

export default App;