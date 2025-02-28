"use client"

import { useState } from "react"
import { PlusCircle, Sparkles, Trophy, Users } from "lucide-react"

const SubmitButtonSection = ({ onSubmitProject }) => {
  const handleModalClose = () => setIsModalOpen(false)
  const handleProjectSubmit = (projectData) => {
    console.log('Project submitted:', projectData)
    setIsModalOpen(false)
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-y border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Showcase Your Project to the World</h2>
          <p className="text-xl text-gray-600 mb-12">
            Join thousands of developers who are sharing their work and getting recognized by the community
          </p>

          <button
            onClick={onSubmitProject}
            className="flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-xl shadow-lg transform transition-all hover:scale-105 text-lg font-semibold mx-auto"
          >
            <PlusCircle className="w-6 h-6" />
            <span>Submit Your Project</span>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <Sparkles className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Get Featured</h3>
              <p className="text-gray-600 text-center">
                Outstanding projects get featured on our homepage and social media
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <Users className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Connect with Peers</h3>
              <p className="text-gray-600 text-center">Network with other developers and receive valuable feedback</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
              <Trophy className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Win Recognition</h3>
              <p className="text-gray-600 text-center">Top projects are eligible for awards and special recognition</p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">What You Can Submit</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Web Apps",
                "Mobile Apps",
                "Open Source",
                "UI/UX Designs",
                "Games",
                "AI/ML Projects",
                "Tools",
                "Libraries",
              ].map((category) => (
                <div key={category} className="p-3 bg-gray-50 rounded-lg text-center">
                  <span className="text-gray-700">{category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubmitButtonSection

