import React, { useState, useEffect } from 'react';
export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-gray-900 text-white py-20 text-center">
      <div className="container mx-auto px-4">
        <div
          className={`overflow-hidden ${show ? 'animate-slideIn' : 'opacity-0'}`}
        >
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
