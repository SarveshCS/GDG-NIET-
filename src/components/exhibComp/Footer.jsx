import React from 'react'
import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p className="text-gray-600 text-sm">© 2025 Student Project Showcase. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}

