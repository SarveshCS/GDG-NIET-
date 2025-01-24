import React, { useState } from 'react'

export default function SubmitProjectModal({ isOpen, onClose, onSubmit }) {
  const [projectData, setProjectData] = useState({
    name: '',
    image: '',
    github: '',
    linkedin: '',
    description: '',
    technologies: '',
    owner: '',
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setProjectData(prevData => ({
      ...prevData,
      [id]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      ...projectData,
      technologies: projectData.technologies.split(',').map(tech => tech.trim())
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md my-8">
        <h2 className="text-2xl font-bold mb-2">Submit Your Project</h2>
        <p className="text-gray-600 mb-4">Fill in the details of your project. Make sure to provide accurate information.</p>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-0.5">Project Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
              value={projectData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-0.5">Project Image URL</label>
            <input
              type="url"
              id="image"
              className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
              value={projectData.image}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="github" className="block text-sm font-medium text-gray-700 mb-0.5">GitHub Repo URL</label>
            <input
              type="url"
              id="github"
              className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
              value={projectData.github}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-0.5">LinkedIn URL</label>
            <input
              type="url"
              id="linkedin"
              className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
              value={projectData.linkedin}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-0.5">Description</label>
            <textarea
              id="description"
              className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 h-24 resize-none"
              value={projectData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div>
            <label htmlFor="technologies" className="block text-sm font-medium text-gray-700 mb-0.5">Technologies Used (comma-separated)</label>
            <input
              type="text"
              id="technologies"
              className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
              value={projectData.technologies}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="owner" className="block text-sm font-medium text-gray-700 mb-0.5">Project Owner</label>
            <input
              type="text"
              id="owner"
              className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
              value={projectData.owner}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

