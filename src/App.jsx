import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home'; // Import your components
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Navbar from './Components/Layout/Navbar';

import './App.css'

function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
