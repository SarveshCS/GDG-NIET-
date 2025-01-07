import React, { useState, useEffect } from 'react';
import { Search, Filter, Plus, Trophy, Github, Linkedin } from 'lucide-react';
import { differenceInDays } from 'date-fns';

// Styles
const styles = {
  app: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Inter, system-ui, sans-serif',
    backgroundColor: '#FAFAFA',
    color: '#1A1A1A',
  },
  container: {
    width: '100%',
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  header: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    position: 'sticky',
    top: 0,
    zIndex: 10,
    borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '72px',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: '600',
    background: 'linear-gradient(135deg, #000000, #333333)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '-0.02em',
  },
  headerActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  searchContainer: {
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    left: '0.75rem',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '1rem',
    height: '1rem',
    color: '#666',
  },
  searchInput: {
    padding: '0.75rem 0.75rem 0.75rem 2.5rem',
    borderRadius: '0.75rem',
    border: '1px solid #E5E7EB',
    backgroundColor: '#F9FAFB',
    color: '#1A1A1A',
    width: '240px',
    fontSize: '0.875rem',
    transition: 'all 0.2s ease',
    '&:focus': {
      outline: 'none',
      borderColor: '#000000',
      backgroundColor: '#FFFFFF',
    },
  },
  btn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.75rem',
    fontWeight: '500',
    fontSize: '0.875rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  btnIcon: {
    width: '1rem',
    height: '1rem',
    marginRight: '0.5rem',
  },
  btnPrimary: {
    backgroundColor: '#000000',
    color: '#FFFFFF',
    border: 'none',
    '&:hover': {
      backgroundColor: '#1A1A1A',
    },
  },
  btnSecondary: {
    backgroundColor: '#F3F4F6',
    color: '#1A1A1A',
    border: 'none',
    '&:hover': {
      backgroundColor: '#E5E7EB',
    },
  },
  btnOutline: {
    backgroundColor: 'transparent',
    color: '#1A1A1A',
    border: '1px solid #E5E7EB',
    '&:hover': {
      backgroundColor: '#F9FAFB',
    },
  },
  dropdown: {
    position: 'relative',
  },
  dropdownContent: {
    position: 'absolute',
    right: 0,
    top: 'calc(100% + 0.5rem)',
    backgroundColor: '#FFFFFF',
    minWidth: '200px',
    borderRadius: '1rem',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
    border: '1px solid #E5E7EB',
    overflow: 'hidden',
  },
  dropdownLabel: {
    padding: '0.75rem 1rem',
    fontSize: '0.75rem',
    color: '#6B7280',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    borderBottom: '1px solid #E5E7EB',
  },
  dropdownItem: {
    display: 'block',
    width: '100%',
    padding: '0.75rem 1rem',
    fontSize: '0.875rem',
    color: '#1A1A1A',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'all 0.2s ease',
    '&:hover': {
      backgroundColor: '#F9FAFB',
    },
  },
  mainContent: {
    flex: 1,
    padding: '3rem 0',
  },
  projectGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '2rem',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: '1rem',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    border: '1px solid #E5E7EB',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05)',
    },
  },
  cardImageContainer: {
    position: 'relative',
    paddingTop: '56.25%', // 16:9 aspect ratio
  },
  cardImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  cardContent: {
    padding: '1.5rem',
  },
  cardTitle: {
    margin: '0 0 0.75rem',
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1A1A1A',
    lineHeight: '1.4',
  },
  cardDescription: {
    fontSize: '0.875rem',
    color: '#6B7280',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
  },
  cardFooter: {
    padding: '0 1.5rem 1.5rem',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  badge: {
    backgroundColor: '#F3F4F6',
    color: '#1A1A1A',
    padding: '0.375rem 0.75rem',
    borderRadius: '2rem',
    fontSize: '0.75rem',
    fontWeight: '500',
  },
  featuredCard: {
    background: 'linear-gradient(135deg, #000000, #1A1A1A)',
    borderRadius: '1.5rem',
    overflow: 'hidden',
    padding: '2rem',
    color: '#FFFFFF',
    marginBottom: '3rem',
  },
  featuredHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '2rem',
  },
  featuredIcon: {
    width: '2rem',
    height: '2rem',
    color: '#FFD700',
  },
  featuredLabel: {
    fontWeight: '600',
    fontSize: '1.125rem',
    letterSpacing: '-0.01em',
  },
  featuredContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '3rem',
    alignItems: 'center',
  },
  featuredImageContainer: {
    borderRadius: '1rem',
    overflow: 'hidden',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
  featuredImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  featuredDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },
  featuredTitle: {
    fontSize: '2.5rem',
    fontWeight: '700',
    letterSpacing: '-0.02em',
    lineHeight: '1.2',
  },
  featuredDescription: {
    fontSize: '1.125rem',
    lineHeight: '1.6',
    color: 'rgba(255, 255, 255, 0.9)',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(4px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
  },
  modal: {
    backgroundColor: '#FFFFFF',
    borderRadius: '1.5rem',
    padding: '2.5rem',
    width: '100%',
    maxWidth: '600px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
  modalTitle: {
    fontSize: '1.875rem',
    fontWeight: '700',
    marginBottom: '0.75rem',
    color: '#1A1A1A',
    letterSpacing: '-0.02em',
  },
  modalDescription: {
    fontSize: '1rem',
    color: '#6B7280',
    marginBottom: '2rem',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginBottom: '1.5rem',
  },
  formLabel: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#1A1A1A',
  },
  formInput: {
    padding: '0.75rem 1rem',
    borderRadius: '0.75rem',
    border: '1px solid #E5E7EB',
    backgroundColor: '#F9FAFB',
    fontSize: '0.875rem',
    transition: 'all 0.2s ease',
    '&:focus': {
      outline: 'none',
      borderColor: '#000000',
      backgroundColor: '#FFFFFF',
    },
  },
  formTextarea: {
    padding: '0.75rem 1rem',
    borderRadius: '0.75rem',
    border: '1px solid #E5E7EB',
    backgroundColor: '#F9FAFB',
    fontSize: '0.875rem',
    minHeight: '120px',
    resize: 'vertical',
    transition: 'all 0.2s ease',
    '&:focus': {
      outline: 'none',
      borderColor: '#000000',
      backgroundColor: '#FFFFFF',
    },
  },
  modalFooter: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '1rem',
    marginTop: '2rem',
  },
  hero: {
    backgroundColor: '#000000',
    color: '#FFFFFF',
    padding: '6rem 0',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: '4rem',
    fontWeight: '800',
    letterSpacing: '-0.03em',
    marginBottom: '1.5rem',
    lineHeight: '1.1',
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    marginBottom: '2.5rem',
    color: 'rgba(255, 255, 255, 0.9)',
    maxWidth: '600px',
    margin: '0 auto 2.5rem',
    lineHeight: '1.6',
  },
  footer: {
    backgroundColor: '#FFFFFF',
    borderTop: '1px solid #E5E7EB',
    padding: '2rem 0',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    fontSize: '0.875rem',
    color: '#6B7280',
  },
  socialIcons: {
    display: 'flex',
    gap: '1.5rem',
  },
  socialIcon: {
    color: '#6B7280',
    transition: 'color 0.2s ease',
    '&:hover': {
      color: '#1A1A1A',
    },
  },
};

// Demo Data
const demoProjects = [
  {
    id: '1',
    title: 'Eco-Friendly Delivery App',
    description: 'A green logistics solution for sustainable urban deliveries.',
    image: '/api/placeholder/400/300',
    category: ['Mobile Apps'],
    technologies: ['Flutter', 'Firebase'],
  },
  {
    id: '2',
    title: 'Neural Network Visualizer',
    description: 'An interactive tool for visualizing and understanding neural networks.',
    image: '/api/placeholder/400/300',
    category: ['AI/ML'],
    technologies: ['Python', 'React'],
  },
  {
    id: '3',
    title: 'Crypto Trading Bot',
    description: 'An automated cryptocurrency trading system using advanced algorithms.',
    image: '/api/placeholder/400/300',
    category: ['AI/ML'],
    technologies: ['Python', 'Node.js'],
  },
  {
    id: '4',
    title: 'VR Fitness Trainer',
    description: 'A virtual reality application for immersive fitness experiences.',
    image: '/api/placeholder/400/300',
    category: ['Mobile Apps'],
    technologies: ['Unity', 'C#'],
  },
  {
    id: '5',
    title: 'AI Music Composer',
    description: 'An AI-powered tool for generating original music compositions.',
    image: '/api/placeholder/400/300',
    category: ['AI/ML'],
    technologies: ['Python', 'TensorFlow'],
  },
  {
    id: '6',
    title: 'Real-Time Translator',
    description: 'A mobile app for instant translation of spoken languages.',
    image: '/api/placeholder/400/300',
    category: ['Mobile Apps'],
    technologies: ['Flutter', 'Firebase'],
  },
];

const featuredProject = {
  id: 'featured',
  title: 'AI-Powered Smart City Solution',
  description: 'An innovative project leveraging AI to optimize urban infrastructure.',
  longDescription: 'An innovative project leveraging AI and IoT to optimize urban infrastructure and improve city living. This comprehensive solution includes traffic management, energy optimization, and waste management systems.',
  image: '/api/placeholder/600/600',
  category: ['AI/ML', 'IoT'],
  technologies: ['Python', 'TensorFlow', 'React'],
  featured: true,
};

const categories = [
  "All",
  "Web Development",
  "Mobile Apps",
  "AI/ML",
  "IoT",
];

// Components
const Header = ({ onFilterChange, onSubmitProject, onSearch }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header style={styles.header}>
      <div style={{ ...styles.container, ...styles.headerContent }}>
        <div style={styles.logo}>
          <span style={styles.logoText}>Exhibition Center</span>
        </div>
        <div style={styles.headerActions}>
          <div style={styles.searchContainer}>
            <Search style={styles.searchIcon} />
            <input
              type="search"
              placeholder="Search projects..."
              style={styles.searchInput}
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
          <div style={styles.dropdown}>
            <button
              style={{ ...styles.btn, ...styles.btnOutline }}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <Filter style={styles.btnIcon} />
              Filter
            </button>
            <div style={{ ...styles.dropdownContent, display: isDropdownOpen ? 'block' : 'none' }}>
              <span style={styles.dropdownLabel}>Filter by Category</span>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    onFilterChange(category);
                    setIsDropdownOpen(false);
                  }}
                  style={styles.dropdownItem}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <button style={{ ...styles.btn, ...styles.btnPrimary }} onClick={onSubmitProject}>
            <Plus style={styles.btnIcon} />
            Submit Project
          </button>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section style={styles.hero}>
      <div style={styles.container}>
        <h1 style={styles.heroTitle}>Showcase Your Innovation</h1>
        <p style={styles.heroSubtitle}>Discover and share groundbreaking student projects</p>
        <button style={{ ...styles.btn, ...styles.btnOutline, color: '#fff', borderColor: '#fff' }}>
          Learn More
        </button>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div style={styles.card}>
      <div style={styles.cardImageContainer}>
        <img src={project.image} alt={project.title} style={styles.cardImage} />
      </div>
      <div style={styles.cardContent}>
        <h3 style={styles.cardTitle}>{project.title}</h3>
        <p style={styles.cardDescription}>{project.description}</p>
      </div>
      <div style={styles.cardFooter}>
        {project.technologies.map((tech) => (
          <span key={tech} style={styles.badge}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const FeaturedProject = ({ project }) => {
  return (
    <div style={styles.featuredCard}>
      <div style={styles.featuredHeader}>
        <Trophy style={styles.featuredIcon} />
        <span style={styles.featuredLabel}>Project of the Month</span>
      </div>
      <div style={styles.featuredContent}>
        <div style={styles.featuredImageContainer}>
          <img src={project.image} alt={project.title} style={styles.featuredImage} />
        </div>
        <div style={styles.featuredDetails}>
          <h2 style={styles.featuredTitle}>{project.title}</h2>
          <p style={styles.featuredDescription}>{project.longDescription}</p>
          <button style={{ ...styles.btn, ...styles.btnSecondary }}>View Details</button>
        </div>
      </div>
    </div>
  );
};

const SubmitProjectModal = ({ isOpen, onClose, onSubmit }) => {
  const [projectData, setProjectData] = useState({
    name: '',
    github: '',
    description: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProjectData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(projectData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modal}>
        <h2 style={styles.modalTitle}>Submit Your Project</h2>
        <p style={styles.modalDescription}>Fill in the details of your project. Make sure to provide accurate information.</p>
        <form style={styles.modalForm} onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              style={styles.formInput}
              value={projectData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="github">GitHub Repo</label>
            <input
              type="text"
              id="github"
              style={styles.formInput}
              value={projectData.github}
              onChange={handleChange}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              style={styles.formTextarea}
              value={projectData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div style={styles.modalFooter}>
            <button type="submit" style={{ ...styles.btn, ...styles.btnPrimary }}>Submit</button>
            <button type="button" style={{ ...styles.btn, ...styles.btnSecondary }} onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

function Exhibpro() {
  const [projects, setProjects] = useState(demoProjects);
  const [filteredProjects, setFilteredProjects] = useState(demoProjects);
  const [showFeatured, setShowFeatured] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Simulate a project submission date (20 days ago)
    const projectSubmissionDate = new Date();
    projectSubmissionDate.setDate(projectSubmissionDate.getDate() - 20);
    const currentDate = new Date();
    const daysSinceSubmission = differenceInDays(currentDate, projectSubmissionDate);
    setShowFeatured(daysSinceSubmission >= 20);
  }, []);

  useEffect(() => {
    filterAndSearchProjects(currentFilter, searchTerm);
  }, [currentFilter, searchTerm, projects]);

  const filterAndSearchProjects = (filter, search) => {
    let filtered = projects;
    if (filter !== "All") {
      filtered = filtered.filter(project => project.category.includes(filter));
    }
    if (search) {
      const lowercaseSearch = search.toLowerCase();
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(lowercaseSearch) ||
        project.description.toLowerCase().includes(lowercaseSearch) ||
        project.technologies.some(tech => tech.toLowerCase().includes(lowercaseSearch))
      );
    }
    setFilteredProjects(filtered);
  };

  const handleFilterChange = (category) => {
    setCurrentFilter(category);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleSubmitProject = (projectData) => {
    const newProject = {
      id: String(projects.length + 1),
      title: projectData.name,
      description: projectData.description,
      image: '/api/placeholder/400/300',
      category: ['Web Development'],
      technologies: ['React'],
    };
    setProjects([...projects, newProject]);
  };

  return (
    <div style={styles.app}>
      <Header
        onFilterChange={handleFilterChange}
        onSubmitProject={() => setIsModalOpen(true)}
        onSearch={handleSearch}
      />
      <Hero />
      <main style={styles.mainContent}>
        <div style={styles.container}>
          {showFeatured && <FeaturedProject project={featuredProject} />}
          <div style={styles.projectGrid}>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </main>
      <footer style={styles.footer}>
        <div style={{ ...styles.container, ...styles.footerContent }}>
          <p style={styles.footerText}>© 2025 Student Project Showcase. All rights reserved.</p>
          <div style={styles.socialIcons}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
              <Github />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>
              <Linkedin />
            </a>
          </div>
        </div>
      </footer>
      <SubmitProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitProject}
      />
    </div>
  );
}

export default Exhibpro;