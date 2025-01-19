import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [show, setShow] = useState(false);
  const [curtain, setCurtain] = useState(true); // Curtain control state

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurtain(false); // Close the curtain after 1 second
      setShow(true); // Show content after curtain closes
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-gray-900 text-white py-20 text-center">
      {/* Curtain Effect */}
      <div
        className={`absolute inset-0 bg-gray-900 transition-all duration-1000 ${curtain ? 'translate-x-0' : 'translate-x-full'}`}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Welcome Message */}
        <div
          className={`overflow-hidden ${show ? 'animate-slideIn' : 'opacity-0'}`}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Welcome
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Showcase Your Innovation
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Discover and share groundbreaking student projects
          </p>
          <button className="px-8 py-3 border-2 border-white rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
