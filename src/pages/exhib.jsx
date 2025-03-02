import React, { useState, useEffect, useMemo } from 'react';
import { differenceInDays } from 'date-fns';
import Header from '@/components/exhibComp/Header';
import Hero from '@/components/exhibComp/Hero';
import SubmitButtonSection from '@/components/exhibComp/SubmitButtonSection';
import Projectshowcase from '@/components/exhibComp/ProjectShowcase';
import SubmitProjectModal from '@/components/exhibComp/SubmitProjectModal';
import Footer from '@/components/exhibComp/Footer';
import { collection, getDocs, addDoc, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase/config';
import SuccessModal from '@/components/exhibComp/SuccessModal';
import JudgmentParameters from '@/components/exhibComp/JudgmentParameters';

// Add categories
const categories = [
  "All",
  "Web Development",
  "Mobile Apps",
  "AI/ML",
  "IoT",
];

export default function ExhibPro() {
  const [projects, setProjects] = useState([]) // Initialize with empty array instead of demoProjects
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentFilter, setCurrentFilter] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  // Fetch projects from Firestore on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsRef = collection(db, 'projects');
        const q = query(projectsRef, orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        
        const fetchedProjects = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setProjects(fetchedProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

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

  // Modified handleSubmitProject to store in Firestore
  const handleSubmitProject = async (projectData) => {
    try {
      console.log('Submitting project data:', projectData);

      const newProject = {
        title: projectData.projectName,
        description: projectData.projectDescription,
        image: projectData.projectImage,
        technologies: projectData.techStack ? projectData.techStack.split(',').map(tech => tech.trim()) : [],
        githubUrl: projectData.githubUrl,
        linkedinUrl: projectData.linkedinUrl,
        owner: projectData.name,
        studentInfo: {
          erpId: projectData.erpId,
          rollNo: projectData.rollNo,
          year: projectData.year,
          section: projectData.section,
          branch: projectData.branch,
          collegeEmail: projectData.collegeEmail || null,
        },
        projectLinks: {
          youtubeUrl: projectData.youtubeUrl || null,
          liveDemoUrl: projectData.liveDemoUrl || null,
        },
        createdAt: new Date().toISOString(),
        status: 'pending',
      };

      const projectsRef = collection(db, 'projects');
      const docRef = await addDoc(projectsRef, newProject);

      setProjects(prevProjects => [{
        id: docRef.id,
        ...newProject
      }, ...prevProjects]);

      setIsModalOpen(false);
      setShowSuccessModal(true);
      
    } catch (error) {
      console.error('Error adding project:', error);
      alert(`Failed to submit project: ${error.message}`);
    }
  };

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
          <JudgmentParameters />
          {filteredProjects.length === 0 ? (
            <p className="text-center text-xl mt-8">No projects found matching your criteria.</p>
          ) : (
            <Projectshowcase projects={filteredProjects} itemsPerPage={10} />
          )}
        </div>
      </main>
      <Footer />
      <SubmitProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitProject}
      />
      <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)} 
      />
    </div>
  );
}