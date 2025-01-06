import React from 'react';
import { Link } from 'react-router-dom';
import '../Hero.css';

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-400 via-gray-300 to-gray-200">
      {/* Subtle Background Shapes */}
      <div className="absolute inset-0">
        <div className="shape-circle-blue-darker opacity-40 animate-float" />
        <div className="shape-dots-gray opacity-30 animate-fade" />
        <div className="shape-curve-dark opacity-20 animate-slide" />
      </div>

      {/* Main Content */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center z-10">
        {/* Logo */}
        <div className="mb-8 flex items-center justify-center">
          <img
            src="/images/logo.svg"
            alt="GDSC Logo"
            className="h-16 w-auto transition-transform transform hover:scale-110"
          />
        </div>
        {/* Title */}
        <h1 className="mb-4 text-4xl font-semibold text-gray-900 animate-fade-in-up md:text-5xl lg:text-6xl">
          Google Developer Groups On Campus
        </h1>
        {/* Subtitle */}
        <h2 className="mb-8 text-xl text-gray-700 animate-fade-in-up animation-delay-200 md:text-2xl">
          NIET
        </h2>
        {/* Join Button */}
        <Link
          to="/join"
          className="inline-flex animate-fade-in-up animation-delay-400 items-center justify-center rounded-full bg-blue-700 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-blue-800 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Join Us
        </Link>

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
