import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, ArrowRight, Sparkles, Code2, Users } from 'lucide-react';

const LiveExhibitionBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <Link to="/exhib" className="block">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Main content */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
                <span className="text-white text-lg font-medium px-4 py-1 bg-white/10 rounded-full">
                  Just Launched
                </span>
                <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Project Exhibition Center
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Showcase your innovative projects and get recognized by the GDG NIET community
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <Trophy className="w-8 h-8 text-yellow-300 mb-3" />
                <h3 className="text-white font-semibold mb-2">Win Recognition</h3>
                <p className="text-blue-100 text-sm">Get your projects featured and win awards</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <Code2 className="w-8 h-8 text-yellow-300 mb-3" />
                <h3 className="text-white font-semibold mb-2">Show Your Skills</h3>
                <p className="text-blue-100 text-sm">Display your technical expertise</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <Users className="w-8 h-8 text-yellow-300 mb-3" />
                <h3 className="text-white font-semibold mb-2">Connect with Peers</h3>
                <p className="text-blue-100 text-sm">Network with fellow developers</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button className="group inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105">
                Visit Exhibition Center
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LiveExhibitionBanner; 