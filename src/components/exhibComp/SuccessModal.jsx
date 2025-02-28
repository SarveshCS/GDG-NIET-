import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function SuccessModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center p-4 z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md">
        <div className="flex flex-col items-center text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Project Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Your project will be reviewed by the jury panel headed by Dr. Kumud Saxena.
          </p>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
} 