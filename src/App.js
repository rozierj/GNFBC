// App.js
import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Giving from './Giving';
import Calendar from './Calendar';
import ReactGA from "react-ga4";
import { trackEvent } from './analytics';
import { FaYoutube, FaFacebook, FaDonate } from "react-icons/fa";

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  // ✅ Outbound link tracking function
  const handleOutboundClick = (label, url) => {
    trackEvent("outbound_click", { label, url });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="font-sans bg-white text-gray-900 min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/giving" element={<Giving />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {/* ✅ Footer with GA4 tracking + icons */}
      <footer className="bg-purple-800 text-white text-center p-4">
        <div className="mb-2">
          &copy; {new Date().getFullYear()} Greater New Friendship Baptist Church. All rights reserved.
        </div>

        <div className="flex justify-center space-x-8 items-center">
          {/* Giving */}
          <button
            onClick={() => handleOutboundClick("Online Giving", "https://subsplash.com/u/-8CS9C9/give")}
            className="flex items-center space-x-2 hover:underline transition duration-200"
          >
            <FaDonate />
            <span>Give Now</span>
          </button>

          {/* YouTube */}
          <button
            onClick={() => handleOutboundClick("YouTube", "https://www.youtube.com/@greaterdublin")}
            className="flex items-center space-x-2 hover:underline transition duration-200"
          >
            <FaYoutube />
            <span>YouTube</span>
          </button>

          {/* Facebook */}
          <button
            onClick={() => handleOutboundClick("Facebook", "https://www.facebook.com/greaterdublin")}
            className="flex items-center space-x-2 hover:underline transition duration-200"
          >
            <FaFacebook />
            <span>Facebook</span>
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
