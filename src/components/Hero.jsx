import React from 'react';
import '../Hero.css';
import Doodle from '../images/doodle ideas.png'; // Doodle image (for desktop)
import doodle2 from '../images/website.png'; // Mobile image

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-cover bg-center">
      {/* Main Content */}
      <div className="relative flex-col items-center justify-center text-center z-10">
        
        {/* Mobile Image */}
        <img
          src={doodle2} 
          alt="Hero"
          className="block sm:hidden w-full object-contain h-full"  // Show on mobile
        />
        
        {/* Desktop Image */}
        <img
          src={Doodle}
          alt="Hero"
          className="hidden sm:block w-full object-cover h-full"  // Show on desktop
        />

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
