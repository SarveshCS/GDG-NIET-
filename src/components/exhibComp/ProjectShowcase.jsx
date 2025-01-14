import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { demoProjects, featuredProject, categories } from '../data.jsx';

export default function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? demoProjects
    : demoProjects.filter(project => project.category.includes(selectedCategory));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Featured Project</h2>
        <ProjectCard project={featuredProject} />
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Project Categories</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

