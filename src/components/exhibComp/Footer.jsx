import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <p className="text-gray-600 mb-4">
            © {new Date().getFullYear()} GDG NIET. All rights reserved.
          </p>
          <div className="flex items-center text-gray-600 hover:text-blue-600 transition">
            <Mail size={16} className="mr-2" />
            <a href="mailto:toshakbhat@gmail.com">
              For any queries, reach out to toshakbhat@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

