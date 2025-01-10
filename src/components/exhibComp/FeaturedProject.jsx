import React from 'react'
import { Trophy } from 'lucide-react'

export default function FeaturedProject({ project }) {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl overflow-hidden p-8 text-white mb-12">
      <div className="flex items-center space-x-3 mb-8">
        <Trophy className="w-8 h-8 text-yellow-400" />
        <span className="text-lg font-semibold">Project of the Month</span>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="rounded-xl overflow-hidden shadow-2xl">
          <img src={project.image} alt={project.title} className="w-full h-auto" />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">{project.title}</h2>
          <p className="text-gray-300 text-lg">{project.longDescription}</p>
          <button className="px-6 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

