import React, { useState } from "react";
import { Search, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = ({ onSearch }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Left: GDG Logo Section */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/images/logo.svg"
                alt="GDG Logo"
                className="h-8 sm:h-10"
              />
              <div className="hidden sm:flex flex-col">
                <span className="text-sm sm:text-base lg:text-lg font-semibold">
                  Google Developer Group On Campus
                </span>
                <span className="text-xs sm:text-sm text-gray-600">NIET</span>
              </div>
            </Link>
          </div>

          {/* Center: Title */}
          <div className="hidden sm:flex items-center justify-center text-center">
            <div className="text-lg lg:text-2xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Exhibition Center
            </div>
          </div>

          {/* Right: Search Bar */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Search Bar */}
            <div className="relative w-32 sm:w-48 md:w-64 lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="search"
                placeholder="Search projects..."
                className="pl-10 pr-4 py-2 w-full bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="sm:hidden flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden py-4 border-t border-gray-200">
            {/* Mobile Search Bar */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="search"
                placeholder="Search projects..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
