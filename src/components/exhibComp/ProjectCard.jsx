import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md transition transform hover:-translate-y-1 hover:shadow-xl">
      <div className="relative pb-2/3">
        <img src={project.image} alt={project.title} className="absolute h-full w-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
