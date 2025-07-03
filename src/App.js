// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Giving from './Giving';

export default function App() {
  return (
    <Router basename="/GNFBC">
      <div className="font-sans bg-white text-gray-900 min-h-screen flex flex-col">
        
        {/* ✅ Navbar */}
        <Navbar />

        {/* ✅ Routes */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/giving" element={<Giving />} />
            {/* ✅ Catch-all fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* ✅ Footer */}
        <footer className="bg-purple-800 text-white text-center p-4">
          &copy; {new Date().getFullYear()} Greater New Friendship Baptist Church. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}
