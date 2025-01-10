import React, { useState } from 'react';
import { Sparkles, Zap, Leaf } from 'lucide-react';

const CreativeButtons = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div className="bg-gray-50 flex items-center justify-center">
      <div className="relative">
        {/* Animated background elements */}
        <div className="absolute -z-10 w-96 h-96 bg-gradient-to-r from-yellow-200 to-blue-200 rounded-full blur-3xl opacity-20 animate-pulse" 
             style={{
               top: '-20%',
               left: '-20%',
               animation: 'pulse 4s infinite'
             }} />
        <div className="absolute -z-10 w-96 h-96 bg-gradient-to-r from-green-200 to-blue-200 rounded-full blur-3xl opacity-20"
             style={{
               bottom: '-20%',
               right: '-20%',
               animation: 'pulse 4s infinite 2s'
             }} />

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s linear infinite`,
                animationDelay: `-${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Buttons container */}
        <div className="grid grid-cols-1 gap-8 p-8">
          {/* Learn Button */}
          <div className="group relative"
               onMouseEnter={() => setHoveredButton('learn')}
               onMouseLeave={() => setHoveredButton(null)}>
            <button className="w-64 px-8 py-6 text-xl font-medium text-white bg-[#F4B400] rounded-2xl shadow-lg 
              transform transition-all duration-500 hover:scale-105 hover:shadow-2xl
              relative overflow-hidden group-hover:tracking-wider">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 
                group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex items-center justify-center gap-3">
                <Sparkles className={`transition-transform duration-500 ${hoveredButton === 'learn' ? 'scale-125' : 'scale-100'}`} />
                <span>Learn</span>
              </div>
              <div className="absolute inset-0 -z-10 animate-[pulse_2s_ease-in-out_infinite]">
                <div className="absolute inset-0 transform transition-transform duration-1000 group-hover:scale-110" />
              </div>
            </button>
          </div>

          {/* Collaborate Button */}
          <div className="group relative pl-16"
               onMouseEnter={() => setHoveredButton('collaborate')}
               onMouseLeave={() => setHoveredButton(null)}>
            <button className="w-64 px-8 py-6 text-xl font-medium text-white bg-[#4285F4] rounded-2xl shadow-lg 
              transform transition-all duration-500 hover:scale-105 hover:shadow-2xl
              relative overflow-hidden group-hover:tracking-wider">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 
                group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex items-center justify-center gap-3">
                <Zap className={`transition-transform duration-500 ${hoveredButton === 'collaborate' ? 'scale-125' : 'scale-100'}`} />
                <span>Collaborate</span>
              </div>
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 transform transition-transform duration-1000 group-hover:scale-110" />
              </div>
            </button>
          </div>

          {/* Grow Button */}
          <div className="group relative"
               onMouseEnter={() => setHoveredButton('grow')}
               onMouseLeave={() => setHoveredButton(null)}>
            <button className="w-64 px-8 py-6 text-xl font-medium text-white bg-[#0F9D58] rounded-2xl shadow-lg 
              transform transition-all duration-500 hover:scale-105 hover:shadow-2xl
              relative overflow-hidden group-hover:tracking-wider">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 opacity-0 
                group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex items-center justify-center gap-3">
                <Leaf className={`transition-transform duration-500 ${hoveredButton === 'grow' ? 'scale-125' : 'scale-100'}`} />
                <span>Grow</span>
              </div>
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 transform transition-transform duration-1000 group-hover:scale-110" />
              </div>
            </button>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0% {
              transform: translateY(0) translateX(0);
              opacity: 0;
            }
            50% {
              opacity: 0.2;
            }
            100% {
              transform: translateY(-200px) translateX(100px);
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default CreativeButtons;