// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { trackNavClick } from './analytics';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Main Navbar (purple) */}
      <nav className="bg-purple-700 text-white">
        <div className="px-4 max-w-6xl mx-auto flex items-center justify-between py-4">
          {/* ✅ Logo */}
          <div className="flex items-center space-x-4">
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="Church Logo"
              className="h-16 w-16 rounded-full bg-white p-1"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-bold">Greater New Friendship Baptist Church</span>
              <span className="text-base italic text-purple-200">Creating Space for Greater!</span>
            </div>
          </div>

          {/* ✅ Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* ✅ Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="hover:underline" onClick={() => trackNavClick("Home")}>Home</Link>
            <Link to="/about" className="hover:underline" onClick={() => trackNavClick("About")}>About</Link>
            <Link to="/contact" className="hover:underline" onClick={() => trackNavClick("Contact")}>Contact</Link>
            <Link to="/giving" className="hover:underline" onClick={() => trackNavClick("Giving")}>Giving</Link>
            <Link to="/calendar" className="hover:underline" onClick={() => trackNavClick("Calendar")}>Calendar</Link>
          </div>
        </div>

        {/* ✅ Mobile Menu */}
        {isOpen && (
          <div className="px-4 pb-4 md:hidden flex flex-col space-y-2">
            <Link to="/" onClick={() => { setIsOpen(false); trackNavClick("Home"); }}>Home</Link>
            <Link to="/about" onClick={() => { setIsOpen(false); trackNavClick("About"); }}>About</Link>
            <Link to="/contact" onClick={() => { setIsOpen(false); trackNavClick("Contact"); }}>Contact</Link>
            <Link to="/giving" onClick={() => { setIsOpen(false); trackNavClick("Giving"); }}>Giving</Link>
            <Link to="/calendar" onClick={() => { setIsOpen(false); trackNavClick("Calendar"); }}>Calendar</Link>
          </div>
        )}
      </nav>

      {/* ⬇️ Contact Utility Bar moved BELOW main nav */}
      <div className="bg-gray-50 text-gray-700 text-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex gap-6 items-center">
            <a href="mailto:gnfbc.info@gmail.com" className="hover:underline" onClick={() => trackNavClick('Email Topbar')}>
              ✉️ gnfbc.info@gmail.com
            </a>
            <a href="tel:+14784633746" className="hover:underline" onClick={() => trackNavClick('Phone Topbar')}>
              📞 (478) 463-3746
            </a>
          </div>
          <div className="hidden sm:block text-gray-500">
            3265 Hwy 19S, Dublin, GA
          </div>
        </div>
      </div>
    </>
  );
}
