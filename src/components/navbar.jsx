import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img src="/images/logo.svg" alt="GDSC Logo" className="h-8 w-8" />
            <div className="flex flex-col">
              <span className="text-sm md:text-base lg:text-lg font-semibold">
                Google Developer Group On Campus
              </span>
              <span className="text-xs md:text-sm text-gray-600">NIET</span>
            </div>
          </Link>
        </div>
        <nav className={`${
          isMenuOpen 
            ? 'absolute top-16 left-0 right-0 flex flex-col items-center space-y-4 bg-white p-6 shadow-md md:relative md:top-0 md:flex-row md:space-y-0 md:space-x-6 md:p-0 md:shadow-none' 
            : 'hidden md:flex md:items-center md:space-x-6'
        }`}>
          <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/events" onClick={toggleMenu}>Events</NavLink>
          <NavLink to="/team" onClick={toggleMenu}>Team</NavLink>
          <Link
            to="/contact"
            className="w-full md:w-auto px-4 py-2 text-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            onClick={toggleMenu}
          >
            Exhibition Center
          </Link>
        </nav>
        <button 
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors" 
          onClick={toggleMenu} 
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    className="text-gray-600 hover:text-gray-900 transition-colors"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;