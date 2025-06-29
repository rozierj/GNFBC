import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-700 text-white">
      <div className="px-4 max-w-6xl mx-auto text-center">

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center space-x-8 py-4">
          <a href="#home" className="hover:text-purple-300">Home</a>
          <a href="#about" className="hover:text-purple-300">About Us</a>
          <a href="#pastor" className="hover:text-purple-300">Pastor’s Message</a>
          <a href="#ministries" className="hover:text-purple-300">Ministries</a>
          <a href="#events" className="hover:text-purple-300">Events</a>
          <a href="#contact" className="hover:text-purple-300">Contact Us</a>
          <a href="#giving" className="hover:text-purple-300">Online Giving</a>
        </div>

        {/* Hamburger Button */}
        <div className="flex justify-end md:hidden py-4">
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 pb-4">
            <a href="#home" className="hover:text-purple-300">Home</a>
            <a href="#about" className="hover:text-purple-300">About Us</a>
            <a href="#pastor" className="hover:text-purple-300">Pastor’s Message</a>
            <a href="#ministries" className="hover:text-purple-300">Ministries</a>
            <a href="#events" className="hover:text-purple-300">Events</a>
            <a href="#contact" className="hover:text-purple-300">Contact Us</a>
            <a href="#giving" className="hover:text-purple-300">Online Giving</a>
          </div>
        )}

      </div>
    </nav>
  );
}
