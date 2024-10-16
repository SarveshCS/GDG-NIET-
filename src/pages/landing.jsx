import React from 'react'
import { motion } from 'framer-motion'
import { FaGoogle, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <FaGoogle className="text-2xl text-blue-500" />
            <span className="font-bold text-xl">GDSC NIET</span>
          </motion.div>
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6"
          >
            {['About', 'Events', 'Team', 'Contact'].map((item, index) => (
              <li key={index}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-blue-500 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </motion.ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl font-bold mb-6"
          >
            Welcome to <span className="text-blue-500">G</span><span className="text-red-500">D</span><span className="text-yellow-500">S</span><span className="text-green-500">C</span> NIET
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl text-gray-600 mb-8"
          >
            Empowering students to learn, connect, and grow with technology
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors"
          >
            Join Us
          </motion.button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            { title: 'Workshops', color: 'blue', delay: 0.9 },
            { title: 'Hackathons', color: 'red', delay: 1.1 },
            { title: 'Study Jams', color: 'yellow', delay: 1.3 },
            { title: 'Tech Talks', color: 'green', delay: 1.5 },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: item.delay }}
              className={`bg-${item.color}-100 p-6 rounded-lg text-center`}
            >
              <h3 className={`text-${item.color}-500 font-bold text-xl mb-2`}>{item.title}</h3>
              <p className="text-gray-600">Join our exciting {item.title.toLowerCase()} and enhance your skills.</p>
            </motion.div>
          ))}
        </section>

        <section className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="text-3xl font-bold mb-6"
          >
            Upcoming Events
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.9 }}
            className="bg-gray-100 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Android Study Jam</h3>
            <p className="text-gray-600 mb-4">Learn Android development with Kotlin in this intensive workshop series.</p>
            <p className="text-blue-500 font-semibold">Date: 15th - 30th November, 2023</p>
          </motion.div>
        </section>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">&copy; 2023 GDSC NIET. All rights reserved.</p>
            <div className="flex space-x-4">
              {[
                { Icon: FaTwitter, href: '#', hoverColor: 'hover:text-blue-500' },
                { Icon: FaLinkedin, href: '#', hoverColor: 'hover:text-blue-700' },
                { Icon: FaInstagram, href: '#', hoverColor: 'hover:text-pink-500' },
              ].map(({ Icon, href, hoverColor }, index) => (
                <a key={index} href={href} className={`text-gray-600 ${hoverColor} transition-colors`}>
                  <Icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}