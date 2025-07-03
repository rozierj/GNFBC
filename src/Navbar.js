// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-700 text-white">
      <div className="px-4 max-w-6xl mx-auto flex items-center justify-between py-4">

        {/* ✅ Logo Placeholder */}
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


        {/* ✅ Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* ✅ Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/giving" className="hover:underline">Giving</Link>
        </div>
      </div>

      {/* ✅ Mobile Menu */}
      {isOpen && (
        <div className="px-4 pb-4 md:hidden flex flex-col space-y-2">
          <Link to="/" className="hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="hover:underline" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="hover:underline" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/giving" className="hover:underline" onClick={() => setIsOpen(false)}>Giving</Link>
        </div>
      )}
    </nav>
  );
}
