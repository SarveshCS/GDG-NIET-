import React, { useState, useEffect, useMemo } from 'react';
import { differenceInDays } from 'date-fns';
import Header from '@/components/exhibComp/Header';
import Hero from '@/components/exhibComp/Hero';
import SubmitButtonSection from '@/components/exhibComp/SubmitButtonSection';
import Projectshowcase from '@/components/exhibComp/ProjectShowcase';
import FeaturedProject from '@/components/exhibComp/FeaturedProject';
import SubmitProjectModal from '@/components/exhibComp/SubmitProjectModal';
import Footer from '@/components/exhibComp/Footer';
import { demoProjects, featuredProject, categories } from '@/components/exhibComp/data';

export default function ExhibPro() {
  const [projects, setProjects] = useState(demoProjects)
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

  // Use useMemo to optimize filtering and searching
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesFilter = currentFilter === "All" || project.category.includes(currentFilter)
      const matchesSearch = searchTerm === "" ||
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      return matchesFilter && matchesSearch
    })
  }, [currentFilter, searchTerm, projects])

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
      category: projectData.category || ['Web Development'],
      technologies: projectData.technologies || ['React'],
    }
    setProjects(prevProjects => [...prevProjects, newProject])
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans">
      <Header
        onFilterChange={handleFilterChange}
        onSearch={handleSearch}
        categories={categories}
        currentFilter={currentFilter}
      />
      <Hero />
      <SubmitButtonSection onSubmitProject={() => setIsModalOpen(true)} />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {showFeatured && <FeaturedProject project={featuredProject} />}
          {filteredProjects.length === 0 ? (
            <p className="text-center text-xl mt-8">No projects found matching your criteria.</p>
          ) : (
            <Projectshowcase projects={filteredProjects} itemsPerPage={4} />
          )}
        </div>
      </main>
      <Footer />
      <SubmitProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitProject}
      />
    </div>
  );
}