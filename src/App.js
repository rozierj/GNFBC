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

      {/* ✅ Expanded footer with full contact block */}
      <footer className="bg-purple-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold mb-2">Greater New Friendship</h3>
            <p className="text-purple-200">
              Creating Space for Greater — Worship with us in Dublin, GA.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Visit Us</h4>
            <address className="not-italic text-purple-100">
              3265 Hwy 19S<br />
              Dublin, GA 31021
            </address>
            <a
              className="inline-block mt-2 underline"
              href="https://www.google.com/maps/search/?api=1&query=3265%20Hwy%2019S%20Dublin%2C%20GA%2031021"
              target="_blank"
              rel="noreferrer"
              onClick={() => handleOutboundClick("Footer - Directions", "https://www.google.com/maps/search/?api=1&query=3265%20Hwy%2019S%20Dublin%2C%20GA%2031021")}
            >
              Get Directions ↗
            </a>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <ul className="space-y-1">
              <li>
                <a
                  href="mailto:gnfbc.info@gmail.com"
                  className="underline"
                  onClick={() => handleOutboundClick("Footer - Email", "mailto:gnfbc.info@gmail.com")}
                >
                  gnfbc.info@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+14784633746"
                  className="underline"
                  onClick={() => handleOutboundClick("Footer - Phone", "tel:+14784633746")}
                >
                  (478) 463-3746
                </a>
              </li>
              
            </ul>

            {/* Social/Giving row */}
            <div className="mt-4 flex flex-wrap gap-4">
              <button
                onClick={() => handleOutboundClick("Online Giving", "https://subsplash.com/u/-8CS9C9/give")}
                className="flex items-center gap-2 bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded"
              >
                <FaDonate />
                <span>Give Now</span>
              </button>
              <button
                onClick={() => handleOutboundClick("YouTube", "https://www.youtube.com/@greaterdublin")}
                className="flex items-center gap-2 bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded"
              >
                <FaYoutube />
                <span>YouTube</span>
              </button>
              <button
                onClick={() => handleOutboundClick("Facebook", "https://www.facebook.com/greaterdublin")}
                className="flex items-center gap-2 bg-purple-700 hover:bg-purple-600 px-4 py-2 rounded"
              >
                <FaFacebook />
                <span>Facebook</span>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-purple-950 text-center text-sm py-3">
          &copy; {new Date().getFullYear()} Greater New Friendship Baptist Church. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
