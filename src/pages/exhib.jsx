import React, { useState, useEffect } from 'react'
import { differenceInDays } from 'date-fns'
import Header from '@/components/exhibComp/Header'
import Hero from '@/components/exhibComp/Hero'
import ProjectCard from '@/components/exhibComp/ProjectCard'
import FeaturedProject from '@/components/exhibComp/FeaturedProject'
import SubmitProjectModal from '@/components/exhibComp/SubmitProjectModal'
import Footer from '@/components/exhibComp/Footer'
import { demoProjects, featuredProject, categories } from '@/components/exhibComp/data'

export default function ExhibPro() {
  const [projects, setProjects] = useState(demoProjects)
  const [filteredProjects, setFilteredProjects] = useState(demoProjects)
  const [showFeatured, setShowFeatured] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentFilter, setCurrentFilter] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const projectSubmissionDate = new Date()
    projectSubmissionDate.setDate(projectSubmissionDate.getDate() - 20)
    const currentDate = new Date()
    const daysSinceSubmission = differenceInDays(currentDate, projectSubmissionDate)
    setShowFeatured(daysSinceSubmission >= 20)
  }, [])

  useEffect(() => {
    filterAndSearchProjects(currentFilter, searchTerm)
  }, [currentFilter, searchTerm, projects])

  const filterAndSearchProjects = (filter, search) => {
    let filtered = projects
    if (filter !== "All") {
      filtered = filtered.filter(project => project.category.includes(filter))
    }
    if (search) {
      const lowercaseSearch = search.toLowerCase()
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(lowercaseSearch) ||
        project.description.toLowerCase().includes(lowercaseSearch) ||
        project.technologies.some(tech => tech.toLowerCase().includes(lowercaseSearch))
      )
    }
    setFilteredProjects(filtered)
  }

  const handleFilterChange = (category) => {
    setCurrentFilter(category)
  }

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  const handleSubmitProject = (projectData) => {
    const newProject = {
      id: String(projects.length + 1),
      title: projectData.name,
      description: projectData.description,
      image: '/api/placeholder/400/300',
      category: ['Web Development'],
      technologies: ['React'],
    }
    setProjects([...projects, newProject])
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans">
      <Header
        onFilterChange={handleFilterChange}
        onSubmitProject={() => setIsModalOpen(true)}
        onSearch={handleSearch}
        categories={categories}
      />
      <Hero />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {showFeatured && <FeaturedProject project={featuredProject} />}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <SubmitProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitProject}
      />
    </div>
  )
}
