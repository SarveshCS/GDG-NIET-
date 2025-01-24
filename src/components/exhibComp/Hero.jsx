import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [show, setShow] = useState(false);
  
  // Changed to match the gray-900 background theme
  const accentColor = 'rgb(17, 24, 39)';  // gray-900
  const darkenAccent = 'rgb(12, 17, 27)'; // slightly darker
  const lightenAccent = 'rgb(26, 32, 48)'; // slightly lighter
  
  const curtainStyle = {
    width: '50%',
    height: '100%',
    background: `repeating-linear-gradient(
      to left,
      ${accentColor} 4vw, 
      ${darkenAccent} 8vw,
      ${lightenAccent} 10vw
    )`,
    backgroundSize: '100% 100%',
    position: 'absolute',
    top: 0,
    transition: 'transform 1.5s ease-in-out',
    zIndex: 20,
    animation: 'wave 8s ease-in-out infinite',
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="relative h-screen bg-gray-900 text-white overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div 
          className="container mx-auto px-4 text-center transition-all duration-1000"
          style={{ 
            opacity: show ? 1 : 0,
            transform: show ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Welcome
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Showcase Your Innovation
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Discover and share groundbreaking student projects
          </p>
          <button className="px-8 py-3 border-2 border-white rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300">
            Learn More
          </button>
          
          <p className="mt-6 text-gray-400 animate-pulse">
            Hover anywhere to reveal more
          </p>
        </div>
      </div>

      {/* Curtains with wave animation */}
      <style>
        {`
          @keyframes wave {
            0%, 100% {
              clip-path: polygon(
                0% 0%,
                100% 0%,
                100% 100%,
                0% 100%
              );
            }
            25% {
              clip-path: polygon(
                0% 0%,
                100% 0%,
                100% 90%,
                0% 100%
              );
            }
            50% {
              clip-path: polygon(
                0% 0%,
                100% 0%,
                100% 100%,
                0% 90%
              );
            }
            75% {
              clip-path: polygon(
                0% 0%,
                100% 0%,
                100% 90%,
                0% 100%
              );
            }
          }
        `}
      </style>
      
      <div 
        className="left-curtain"
        style={{
          ...curtainStyle,
          left: 0,
          transform: isHovered ? 'translateX(-100%)' : 'translateX(0)',
        }}
      />
      <div 
        className="right-curtain"
        style={{
          ...curtainStyle,
          right: 0,
          transform: isHovered ? 'translateX(100%)' : 'translateX(0)',
          animation: 'wave 8s ease-in-out infinite reverse', // Reverse animation for right curtain
        }}
      />
    </section>
  );
};

export default Hero;