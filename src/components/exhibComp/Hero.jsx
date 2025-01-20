import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [show, setShow] = useState(false);
  
  const accentColor = 'hsl(360, 80%, 50%)';
  const darkenAccent = 'hsl(360, 80%, 38%)';
  const lightenAccent = 'hsl(360, 80%, 70%)';
  
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
      {/* Content - Now positioned behind curtains */}
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

      {/* Curtains - Now overlaying the content */}
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
        }}
      />
    </section>
  );
};

export default Hero;