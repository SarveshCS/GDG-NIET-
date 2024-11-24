import React from 'react';
import { Link } from 'react-router-dom';
import '../Hero.css';

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0">
        <div className="shape-circle-blue animate-float" />
        <div className="shape-circle-red animate-float-delay-1" />
        <div className="shape-circle-green animate-float-delay-2" />
        <div className="shape-circle-yellow animate-float-delay-3" />
        <div className="shape-dots-1 animate-fade" />
        <div className="shape-dots-2 animate-fade-delay" />
        <div className="shape-curve-1 animate-slide" />
        <div className="shape-curve-2 animate-slide-delay" />
      </div>

      {/* Main Content */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center z-10">
        <div className="mb-8 flex items-center justify-center animate-bounce">
          <img src="/images/logo.svg" alt="GDSC Logo" className="h-16 w-auto transition-transform transform hover:scale-110" />
        </div>
        <h1 className="mb-4 text-4xl font-semibold text-white animate-fade-in-up md:text-5xl lg:text-6xl">
          Google Developer Groups On Campus
        </h1>
        <h2 className="mb-8 text-xl text-white animate-fade-in-up animation-delay-200 md:text-2xl">
          NIET
        </h2>
        <Link
          to="/join"
          className="inline-flex animate-fade-in-up animation-delay-400 items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-blue-700 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Join Us
        </Link>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="h-8 w-8 text-white"
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
