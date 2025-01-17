import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaDiscord, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer2 = () => {
  return (
    <footer className="py-6 bg-white w-full overflow-hidden text-gray-800">
      <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
        <div className="grid grid-cols-12">
          <div className="pb-6 col-span-full md:pb-0 md:col-span-6 flex items-center space-x-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/30">
              <img src="/images/logo.svg" alt="GDG NIET Logo" />
            </div>
            <span className="self-center text-2xl font-semibold text-blue-700">GDG NIET</span>
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-3">
            <p className="pb-1 text-lg font-medium text-blue-500">About Us</p>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline hover:text-blue-600">
                  Meet the team
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-blue-600">
                  GDG Chapter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-blue-600">
                  Exhibition Center
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-3">
            <p className="pb-1 text-lg font-medium text-blue-500">Connect with Us</p>
            <ul className="space-y-2">
              <li>
                <a href="https://www.instagram.com" className="flex items-center space-x-2 hover:underline text-pink-600 hover:text-pink-800">
                  <FaInstagram size={24} /> <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="flex items-center space-x-2 hover:underline text-blue-500 hover:text-blue-400">
                  <FaTwitter size={24} /> <span>Twitter</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" className="flex items-center space-x-2 hover:underline text-blue-700 hover:text-blue-900">
                  <FaLinkedin size={24} /> <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://github.com" className="flex items-center space-x-2 hover:underline text-gray-700 hover:text-gray-900">
                  <FaGithub size={24} /> <span>GitHub</span>
                </a>
              </li>
              <li>
                <a href="https://discord.com" className="flex items-center space-x-2 hover:underline text-purple-500 hover:text-purple-700">
                  <FaDiscord size={24} /> <span>Discord</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me" className="flex items-center space-x-2 hover:underline text-green-600 hover:text-green-800">
                  <FaWhatsapp size={24} /> <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a href="mailto:example@gmail.com" className="flex items-center space-x-2 hover:underline text-gray-700 hover:text-red-400">
                  <FaEnvelope size={24} /> <span>Email</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid justify-center pt-6 lg:justify-between">
          <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
            <span className="text-gray-600">©2025 All rights reserved</span>
            <a href="#">
              <span className="text-gray-600 hover:underline">Privacy policy</span>
            </a>
            <a href="#">
              <span className="text-gray-600 hover:underline">Terms of service</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
