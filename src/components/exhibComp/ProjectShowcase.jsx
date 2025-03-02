import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Projectshowcase = ({ projects }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Changed to 10 items per page
    const totalPages = Math.ceil(projects.length / itemsPerPage);
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProjects = projects.slice(startIndex, endIndex);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
            // Scroll to top of projects section
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
            // Scroll to top of projects section
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div className="w-full">
            {/* Projects Grid */}
            <div className="flex flex-col gap-6">
                {currentProjects.map((project) => (
                    <div key={project.id} className="w-full">
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-8">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className="flex items-center gap-2 px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                    >
                        <ChevronLeft className="h-4 w-4" />
                        <span>Previous</span>
                    </button>
                    
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">
                            Page {currentPage} of {totalPages}
                        </span>
                        <span className="text-sm text-gray-400">
                            ({startIndex + 1}-{Math.min(endIndex, projects.length)} of {projects.length})
                        </span>
                    </div>
                    
                    <button
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                        className="flex items-center gap-2 px-4 py-2 border rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                    >
                        <span>Next</span>
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Projectshowcase;