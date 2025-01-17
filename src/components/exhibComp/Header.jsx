import React, { useState } from 'react';
import { Search, Filter, Menu, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = ({ onFilterChange, onSearch, categories, currentFilter }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white bg-opacity-80 backdrop-blur-md sticky top-0 z-10 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center space-x-4">
            <Link to='/'>
            <Home className="text-gray-600" size={24} />
            </Link>
            {/* The Exhibition Center text centered */}
            <div className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Exhibition Center
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="search"
                placeholder="Search projects..."
                className="pl-10 pr-4 py-2 w-64 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition"
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
            <div className="relative hidden md:block">
              <button
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <Filter size={20} />
                <span>Filter</span>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="py-2 px-4 bg-gray-100 text-xs font-semibold uppercase text-gray-600">
                    Filter by Category
                  </div>
                  {categories.map((category) => (
                    <button
                      key={category}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition"
                      onClick={() => {
                        onFilterChange(category);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="search"
                placeholder="Search projects..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-900 focus:bg-white transition"
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase text-gray-600 mb-2">Filter by Category</div>
              {categories.map((category) => (
                <button
                  key={category}
                  className="block w-full text-left py-2 hover:bg-gray-100 transition"
                  onClick={() => {
                    onFilterChange(category);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
