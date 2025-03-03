import React from 'react';
import { Github, Linkedin, Youtube, Globe, User, BookOpen, Calendar, Layers } from 'lucide-react';

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
    <div className="border-2 border-transparent hover:border-dashed hover:border-gray-400 flex flex-col sm:flex-row w-full bg-white rounded-lg overflow-hidden hover:bg-zinc-100 hover:shadow-neutral-700 transition-colors">
      {/* Thumbnail - Full width on mobile, left side on desktop */}
      <div className="relative w-full sm:w-1/3 sm:h-64">
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
        <div className="bg-white sm:w-fit p-3 rounded-lg text-gray-700 text-sm">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center gap-2 sm:gap-3">
            <span className="font-medium flex items-center gap-2">
              <span className="bg-white p-1 rounded-full shadow-sm">
                <User size={16} className="text-gray-500" />
              </span>
              {project.owner}
            </span>

            {project.studentInfo && (
              <>
                <span className="flex items-center gap-2">
                  <span className="bg-white p-1 rounded-full shadow-sm">
                    <BookOpen size={16} className="text-gray-500" />
                  </span>
                  {project.studentInfo.branch}
                </span>

                <span className="flex items-center gap-2">
                  <span className="bg-white p-1 rounded-full shadow-sm">
                    <Calendar size={16} className="text-gray-500" />
                  </span>
                  Year {project.studentInfo.year}
                </span>

                <span className="flex items-center gap-2">
                  <span className="bg-white p-1 rounded-full shadow-sm">
                    <Layers size={16} className="text-gray-500" />
                  </span>
                  Section {project.studentInfo.section}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Project Links */}
        <div className="flex items-center gap-3 my-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              className="text-gray-500 hover:text-gray-900 transition-colors p-1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              title="GitHub Repository"
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
              title="Owner's LinkedIn Profile"
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
              title="Project Demo Video"
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
              title="Live Demo"
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
              className="px-2 py-1 bg-slate-200 text-gray-600 text-xs sm:text-sm font-medium rounded-full"
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
