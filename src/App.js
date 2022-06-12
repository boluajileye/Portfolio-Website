import './index.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from './pages/Contact';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer.js';
import Logo from './components/Logo';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
   <Logo/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="portfolio" element={<Portfolio />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
