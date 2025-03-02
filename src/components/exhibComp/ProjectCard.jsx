import React from 'react';
import { Github, Linkedin, Youtube, Globe } from 'lucide-react';

const ProjectCard = ({ project }) => {
  // Add loading state
  if (!project) {
    return (
      <div className="flex flex-col sm:flex-row w-full h-auto sm:h-48 bg-gray-100 rounded-lg animate-pulse">
        <div className="w-full sm:w-1/3 h-48 sm:min-w-[200px] bg-gray-200" />
        <div className="flex-1 p-4">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-4" />
          <div className="h-4 bg-gray-200 rounded w-full mb-3" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row w-full bg-white rounded-lg overflow-hidden hover:bg-gray-50 transition-colors">
      {/* Thumbnail - Full width on mobile, left side on desktop */}
      <div className="relative w-full sm:w-1/3 h-48 sm:min-w-[200px]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = '/placeholder.svg';
          }}
        />
      </div>
      
      {/* Content - Below image on mobile, right side on desktop */}
      <div className="flex flex-col p-4 flex-1">
        {/* Header with title */}
        <h3 className="font-medium text-lg mb-2">{project.title}</h3>
        
        {/* Description - Remove line-clamp on mobile */}
        <p className="text-gray-600 text-sm mb-3 sm:line-clamp-3">{project.description}</p>

        {/* Student Info */}
        <div className="flex flex-wrap gap-2 mb-3 text-sm text-gray-600">
          <span className="font-medium">{project.owner}</span>
          {project.studentInfo && (
            <>
              <span className="hidden sm:inline">•</span>
              <span>{project.studentInfo.branch}</span>
              <span className="hidden sm:inline">•</span>
              <span>Year {project.studentInfo.year}</span>
              <span className="hidden sm:inline">•</span>
              <span>Section {project.studentInfo.section}</span>
            </>
          )}
        </div>

        {/* Project Links */}
        <div className="flex items-center gap-3 mb-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className="text-gray-500 hover:text-gray-900 transition-colors p-1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
            >
              <Github size={20} />
            </a>
          )}
          {project.linkedinUrl && (
            <a
              href={project.linkedinUrl}
              className="text-gray-500 hover:text-gray-900 transition-colors p-1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Owner's LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
          )}
          {project.projectLinks?.youtubeUrl && (
            <a
              href={project.projectLinks.youtubeUrl}
              className="text-gray-500 hover:text-gray-900 transition-colors p-1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Project Demo Video"
            >
              <Youtube size={20} />
            </a>
          )}
          {project.projectLinks?.liveDemoUrl && (
            <a
              href={project.projectLinks.liveDemoUrl}
              className="text-gray-500 hover:text-gray-900 transition-colors p-1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo"
            >
              <Globe size={20} />
            </a>
          )}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies?.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs sm:text-sm font-medium rounded-full"
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
