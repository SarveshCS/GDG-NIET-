import React from 'react';
import { FileCode2, Lightbulb, Code2, Github } from 'lucide-react';

export default function JudgmentParameters() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Evaluation Parameters</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex flex-col items-center text-center p-4 bg-blue-50 rounded-lg">
            <Lightbulb className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-semibold mb-2">Problem Statement</h3>
            <p className="text-sm text-gray-600">
              Clear identification and innovative solution to a real-world problem
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4 bg-blue-50 rounded-lg">
            <FileCode2 className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-semibold mb-2">Tech Stack</h3>
            <p className="text-sm text-gray-600">
              Appropriate use of technologies and technical complexity
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4 bg-blue-50 rounded-lg">
            <Code2 className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-semibold mb-2">Implementation</h3>
            <p className="text-sm text-gray-600">
              Code quality, functionality, and overall project execution
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
          <Github className="w-5 h-5 text-gray-700 mr-2" />
          <a
            href="https://github.com/GDG-NIET/GDG-NIET-Guidelines"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            GDG NIET Project Submission Guidelines
          </a>
        </div>
      </div>
    </div>
  );
} 
