import React from 'react';
import {
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTwitter,
  FaIntercom,
  FaInbox,
  FaInternetExplorer
} from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-800 text-gray-200">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="text-center">
          <h1 className="text-xl font-semibold text-white">
            Google Developer Groups <br /> On Campus • Noida Institute of Engineering and Technology
          </h1>
        </div>

        {/* Quick Links */}
        <div className="mt-8 grid grid-cols-4 gap-4 justify-center text-center">
          <a href="/" className="text-gray-300 hover:text-gray-100 transition-colors duration-200">Home</a>
          <a href="/events" className="text-gray-300 hover:text-gray-100 transition-colors duration-200">Events</a>
          <a href="/team" className="text-gray-300 hover:text-gray-100 transition-colors duration-200">Team</a>
          <a href="/media" className="text-gray-300 hover:text-gray-100 transition-colors duration-200">Media</a>
        </div>

        {/* Social Links */}
          <div className="mt-8 text-center">
            <h2 className="text-lg font-semibold text-white">Social</h2>
            <div className="flex justify-center mt-4 space-x-6">
              <a href="https://www.instagram.com/gdg_niet/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500 transition-transform duration-200 transform hover:scale-110">
                <FaInstagram size={30} />
              </a>
              <a href="https://gdg.community.dev/gdg-on-campus-noida-institute-of-engineering-and-technology-greater-noida-india/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-500 transition-transform duration-200 transform hover:scale-110">
                <FaGoogle size={30} />
              </a>
              <a href="https://www.linkedin.com/company/gdgniet/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition-transform duration-200 transform hover:scale-110">
                <FaLinkedin size={30} />
              </a>
              <a href="https://www.twitter.com/gdg_niet" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-transform duration-200 transform hover:scale-110">
                <FaTwitter size={30} />
              </a>
              <a href="mailto:gdgniet@gmai.com" className="text-gray-300 hover:text-purple-500 transition-transform duration-200 transform hover:scale-110">
                <FaInbox size={30} />
              </a>
            </div>
          </div>

          {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>&copy; 2025 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
