import React from 'react';
import { Github, Linkedin, Youtube, Globe } from 'lucide-react';

const ProjectCard = ({ project }) => {
  // Add loading state
  if (!project) {
    return (
      <div className="flex flex-row w-full h-48 bg-gray-100 rounded-lg animate-pulse">
        <div className="w-1/3 min-w-[200px] bg-gray-200" />
        <div className="flex-1 p-4">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-4" />
          <div className="h-4 bg-gray-200 rounded w-full mb-3" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
        </div>
      </div>
    );
  }

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

        {/* Student Info */}
        <div className="flex flex-wrap gap-2 mb-3 text-sm text-gray-600">
          <span>{project.owner}</span>
          {project.studentInfo && (
            <>
              <span>•</span>
              <span>{project.studentInfo.branch}</span>
              <span>•</span>
              <span>Year {project.studentInfo.year}</span>
              <span>•</span>
              <span>Section {project.studentInfo.section}</span>
            </>
          )}
        </div>

        {/* Project Links */}
        <div className="flex items-center gap-3 mb-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className="text-gray-500 hover:text-gray-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
            >
              <Github size={18} />
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
              <Linkedin size={18} />
            </a>
          )}
          {project.projectLinks?.youtubeUrl && (
            <a
              href={project.projectLinks.youtubeUrl}
              className="text-gray-500 hover:text-gray-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Project Demo Video"
            >
              <Youtube size={18} />
            </a>
          )}
          {project.projectLinks?.liveDemoUrl && (
            <a
              href={project.projectLinks.liveDemoUrl}
              className="text-gray-500 hover:text-gray-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo"
            >
              <Globe size={18} />
            </a>
          )}
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
