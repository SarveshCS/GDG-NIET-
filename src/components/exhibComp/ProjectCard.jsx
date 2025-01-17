import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-row w-full bg-white rounded-lg overflow-hidden hover:bg-gray-50 transition-colors">
      {/* Thumbnail - Left side */}
      <div className="relative w-1/3 min-w-[200px]">
        <img
          src={project.image}
          alt={project.title}
          className="absolute top-0 left-0 w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = '/placeholder.svg';
          }}
        />
      </div>
      
      {/* Content - Right side */}
      <div className="flex flex-col p-4 flex-1">
        {/* Header with title */}
        <h3 className="font-medium text-lg mb-2">{project.title}</h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-3">{project.description}</p>

        {/* Category */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.category?.map((cat) => (
            <span
              key={cat}
              className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Owner and social links */}
        <div className="flex items-center gap-2 mb-3">
          <p className="text-gray-600 text-sm">{project.owner || 'Project Owner'}</p>
          <div className="flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="text-gray-500 hover:text-gray-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
              >
                <Github size={16} />
              </a>
            )}
            {project.linkedinUrl && (
              <a
                href={project.linkedinUrl}
                className="text-gray-500 hover:text-gray-900 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Owner's LinkedIn Profile"
              >
                <Linkedin size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.technologies?.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
