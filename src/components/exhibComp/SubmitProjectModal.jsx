import React, { useState } from 'react'

export default function SubmitProjectModal({ isOpen, onClose, onSubmit }) {
  const [projectData, setProjectData] = useState({
    // Required fields
    name: '',
    erpId: '',
    rollNo: '',
    projectName: '',
    projectDescription: '',
    projectImage: '',
    linkedinUrl: '',
    githubUrl: '',
    techStack: '',
    year: '',
    section: '',
    branch: '',
    // Optional fields
    collegeEmail: '',
    youtubeUrl: '',
    liveDemoUrl: '',
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setProjectData(prevData => ({
      ...prevData,
      [id]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Validate required fields
      const requiredFields = [
        'name', 'erpId', 'rollNo', 'projectName', 'projectDescription',
        'projectImage', 'githubUrl', 'linkedinUrl', 'techStack', 'year',
        'section', 'branch'
      ];

      const missingFields = requiredFields.filter(field => !projectData[field]);
      if (missingFields.length > 0) {
        throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
      }

      // Submit the data without processing techStack here
      onSubmit(projectData);
    } catch (error) {
      console.error('Form submission error:', error);
      alert(error.message);
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-2xl p-6 w-full max-w-2xl my-8">
        <h2 className="text-2xl font-bold mb-2">Submit Your Project</h2>
        <p className="text-gray-600 mb-4">Fields marked with * are required</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Personal Information Section */}
          <div className="bg-gray-50 p-4 rounded-lg space-y-3">
            <h3 className="font-semibold text-lg mb-2">Personal Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-0.5">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={projectData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="erpId" className="block text-sm font-medium text-gray-700 mb-0.5">ERP ID *</label>
                <input
                  type="text"
                  id="erpId"
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={projectData.erpId}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="rollNo" className="block text-sm font-medium text-gray-700 mb-0.5">Roll Number *</label>
                <input
                  type="text"
                  id="rollNo"
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={projectData.rollNo}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="collegeEmail" className="block text-sm font-medium text-gray-700 mb-0.5">College Email</label>
                <input
                  type="email"
                  id="collegeEmail"
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={projectData.collegeEmail}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-0.5">Year *</label>
                <select
                  id="year"
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={projectData.year}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Year</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                </select>
              </div>

              <div>
                <label htmlFor="section" className="block text-sm font-medium text-gray-700 mb-0.5">Section *</label>
                <input
                  type="text"
                  id="section"
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={projectData.section}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="branch" className="block text-sm font-medium text-gray-700 mb-0.5">Branch *</label>
                <input
                  type="text"
                  id="branch"
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={projectData.branch}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Project Information Section */}
          <div className="bg-gray-50 p-4 rounded-lg space-y-3">
            <h3 className="font-semibold text-lg mb-2">Project Information</h3>
            
            <div>
              <label htmlFor="projectName" className="block text-sm font-medium text-gray-700 mb-0.5">Project Name *</label>
              <input
                type="text"
                id="projectName"
                className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={projectData.projectName}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-0.5">Project Description *</label>
              <textarea
                id="projectDescription"
                className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                value={projectData.projectDescription}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="projectImage" className="block text-sm font-medium text-gray-700 mb-0.5">Project Image URL *</label>
              <input
                type="url"
                id="projectImage"
                className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={projectData.projectImage}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="techStack" className="block text-sm font-medium text-gray-700 mb-0.5">Tech Stack (comma-separated) *</label>
              <input
                type="text"
                id="techStack"
                className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={projectData.techStack}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Links Section */}
          <div className="bg-gray-50 p-4 rounded-lg space-y-3">
            <h3 className="font-semibold text-lg mb-2">Project Links</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="githubUrl" className="block text-sm font-medium text-gray-700 mb-0.5">GitHub URL *</label>
                <input
                  type="url"
                  id="githubUrl"
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={projectData.githubUrl}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="linkedinUrl" className="block text-sm font-medium text-gray-700 mb-0.5">LinkedIn URL *</label>
                <input
                  type="url"
                  id="linkedinUrl"
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={projectData.linkedinUrl}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="youtubeUrl" className="block text-sm font-medium text-gray-700 mb-0.5">YouTube Demo URL</label>
                <input
                  type="url"
                  id="youtubeUrl"
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={projectData.youtubeUrl}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="liveDemoUrl" className="block text-sm font-medium text-gray-700 mb-0.5">Live Demo URL</label>
                <input
                  type="url"
                  id="liveDemoUrl"
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={projectData.liveDemoUrl}
                  onChange={handleChange}
                />
              </div>
            </div>
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
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Submit Project
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

