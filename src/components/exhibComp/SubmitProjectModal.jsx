import React, { useState, useRef } from 'react'
import { uploadToCloudinary } from '@/utils/cloudinary'
import { FaTimes } from 'react-icons/fa' // Import FontAwesome icon

// FileUpload component with a two-column layout for text and preview image
function FileUpload({ onFileSelect, previewUrl }) {
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef(null)

  const handleDragEnter = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file) {
      onFileSelect(file)
    }
  }

  const handleClick = () => {
    fileInputRef.current.click()
  }

  return (
    <div
      className={`flex items-center justify-between h-40 border-2 mt-2 ${
        isDragging ? 'border-blue-500' : 'border-blue-300'
      } border-dashed rounded-md p-6 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-[1.01]`}
      onClick={handleClick}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files[0]
          if (file) onFileSelect(file)
        }}
        ref={fileInputRef}
        className="hidden"
      />
      {/* Left side: Instructional text */}
      <div className="flex-1 pr-4">
        <p className="text-sm md:text-lg text-gray-600">
          Drag & drop your image here, or click to select file.
        </p>
      </div>
      {/* Right side: Preview image (if available) */}
      <div className="flex-none">
        {previewUrl && (
          <img
            src={previewUrl}
            alt="Preview"
            className="w-32 h-32 md:w-52 object-cover rounded-md shadow-md"
          />
        )}
      </div>
    </div>
  )
}

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
  const [selectedImage, setSelectedImage] = useState(null)
  const [isUploading, setIsUploading] = useState(false)

  const handleChange = (e) => {
    const { id, value } = e.target
    setProjectData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleFileSelect = (file) => {
    setSelectedImage(file)
    const previewUrl = URL.createObjectURL(file)
    setProjectData((prev) => ({
      ...prev,
      projectImage: previewUrl,
    }))
  }

  const getInputClasses = () =>
    'w-full px-3 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-200 ease-in-out text-sm sm:text-base'

  const handleSubmit = async (e) => {
    e.preventDefault()

    const requiredFields = [
      'name',
      'erpId',
      'rollNo',
      'projectName',
      'projectDescription',
      'githubUrl',
      'linkedinUrl',
      'techStack',
      'year',
      'section',
      'branch',
    ]
    const missingFields = requiredFields.filter(
      (field) => !projectData[field]
    )
    if (missingFields.length > 0 || !selectedImage) {
      alert(
        `Missing required fields: ${missingFields.join(', ')}${
          !selectedImage ? ', project image' : ''
        }`
      )
      return
    }

    try {
      setIsUploading(true)
      const imageUrl = await uploadToCloudinary(selectedImage)
      onSubmit({
        ...projectData,
        projectImage: imageUrl,
      })
    } catch (error) {
      console.error('Form submission error:', error)
      alert(error.message)
    } finally {
      setIsUploading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-start p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-2xl p-4 sm:p-6 w-full max-w-2xl my-4 sm:my-8 mx-auto shadow-lg transition-all duration-300 ease-in-out">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-600">
            Submit Your Project
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes />
          </button>
        </div>
        <p className="text-sm sm:text-base text-gray-600 mb-4">
          Fields marked with <span className="text-red-500">*</span> are required
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Personal Information Section */}
          <div className="bg-gray-50 p-3 sm:p-4 rounded-lg space-y-3 shadow-md">
            <h3 className="font-semibold text-base sm:text-lg mb-2 text-blue-500">
              Personal Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-0.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className={getInputClasses()}
                  value={projectData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="erpId" className="block text-sm font-medium text-gray-700 mb-0.5">
                  ERP ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="erpId"
                  className={getInputClasses()}
                  value={projectData.erpId}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="rollNo" className="block text-sm font-medium text-gray-700 mb-0.5">
                  Roll Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="rollNo"
                  className={getInputClasses()}
                  value={projectData.rollNo}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="collegeEmail" className="block text-sm font-medium text-gray-700 mb-0.5">
                  College Email
                </label>
                <input
                  type="email"
                  id="collegeEmail"
                  className={getInputClasses()}
                  value={projectData.collegeEmail}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-0.5">
                  Year <span className="text-red-500">*</span>
                </label>
                <select
                  id="year"
                  className={getInputClasses()}
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
                <label htmlFor="section" className="block text-sm font-medium text-gray-700 mb-0.5">
                  Section <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="section"
                  className={getInputClasses()}
                  value={projectData.section}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="branch" className="block text-sm font-medium text-gray-700 mb-0.5">
                  Branch <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="branch"
                  className={getInputClasses()}
                  value={projectData.branch}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Project Information Section */}
          <div className="bg-gray-50 p-3 sm:p-4 rounded-lg space-y-3 shadow-md">
            <h3 className="font-semibold text-base sm:text-lg mb-2 text-blue-500">
              Project Information
            </h3>

            <div className="space-y-3">
              <div>
                <label htmlFor="projectName" className="block text-sm font-medium text-gray-700 mb-0.5">
                  Project Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="projectName"
                  className={getInputClasses()}
                  value={projectData.projectName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 mb-0.5">
                  Project Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="projectDescription"
                  className={`${getInputClasses()} h-24`}
                  value={projectData.projectDescription}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="techStack" className="block text-sm font-medium text-gray-700 mb-0.5">
                  Tech Stack <span className="text-red-500">*</span>{' '}
                  <span className="text-gray-500">(comma-separated)</span>
                </label>
                <input
                  type="text"
                  id="techStack"
                  placeholder="e.g., React, Node.js, MongoDB"
                  className={getInputClasses()}
                  value={projectData.techStack}
                  onChange={handleChange}
                  required
                />
                <p className="mt-1 text-xs text-gray-500">
                  List the technologies used in your project, separated by commas
                </p>
              </div>

              <div>
                <label htmlFor="projectImage" className="block text-sm font-medium text-gray-700 mb-0.5">
                  Project Image <span className="text-red-500">*</span>
                </label>
                <FileUpload
                  onFileSelect={handleFileSelect}
                  previewUrl={projectData.projectImage}
                />
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="bg-gray-50 p-3 sm:p-4 rounded-lg space-y-3 shadow-md">
            <h3 className="font-semibold text-base sm:text-lg mb-2 text-blue-500">
              Project Links
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label htmlFor="githubUrl" className="block text-sm font-medium text-gray-700 mb-0.5">
                  GitHub URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  id="githubUrl"
                  className={getInputClasses()}
                  value={projectData.githubUrl}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="linkedinUrl" className="block text-sm font-medium text-gray-700 mb-0.5">
                  LinkedIn URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  id="linkedinUrl"
                  className={getInputClasses()}
                  value={projectData.linkedinUrl}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="youtubeUrl" className="block text-sm font-medium text-gray-700 mb-0.5">
                  YouTube Demo URL
                </label>
                <input
                  type="url"
                  id="youtubeUrl"
                  className={getInputClasses()}
                  value={projectData.youtubeUrl}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="liveDemoUrl" className="block text-sm font-medium text-gray-700 mb-0.5">
                  Live Demo URL
                </label>
                <input
                  type="url"
                  id="liveDemoUrl"
                  className={getInputClasses()}
                  value={projectData.liveDemoUrl}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition duration-200 ease-in-out"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 ease-in-out disabled:opacity-50"
              disabled={isUploading}
            >
              {isUploading ? 'Uploading...' : 'Submit Project'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
