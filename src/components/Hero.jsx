import React from 'react';
import { Link } from 'react-router-dom';
import '../Hero.css';
import Doodle from '../images/doodle ideas.png'; // Importing the image

const Hero = () => {
  return (
    <div
      className="relative min-h-screen overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${Doodle})`, // Using the imported image
      }}
    >
      {/* Main Content */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center z-10">
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <svg
            className="h-8 w-8 text-gray-600"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
