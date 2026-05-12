import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, Phone, Mail, Globe, ArrowRight, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useState, useEffect } from 'react';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import InvestmentPlatform from './pages/InvestmentPlatform';
import SellBusiness from './pages/SellBusiness';
import Portfolio from './pages/Portfolio';
import GrowthSolutions from './pages/GrowthSolutions';
import Contact from './pages/Contact';

export default function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/platform" element={<InvestmentPlatform />} />
            <Route path="/sell-your-business" element={<SellBusiness />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/growth-solutions" element={<GrowthSolutions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
