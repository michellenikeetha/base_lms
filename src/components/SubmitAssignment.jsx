// components/SubmitAssignment.js
import React, { useState } from 'react';
import SignedInNavbar from './SignedInNavbar';

const SubmitAssignment = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const assignmentDetails = {
    title: 'Assignment 2',
    maxFileSize: '2 GB',
    maxFiles: 10,
    allowedFileTypes: ['PDF', 'DOCX'],
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    setSelectedFiles(files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleSubmit = () => {
    if (selectedFiles.length === 0) {
      alert("Please select a file to submit.");
      return;
    }
    // Logic for submitting the files
    console.log("Submitting files:", selectedFiles);
  };

  const handleCancel = () => {
    setSelectedFiles([]);
  };

  return (
    <div>
        <SignedInNavbar />
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold mb-6">Submit Your Assignment</h1>

            <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-3xl">
                <h2 className="text-2xl font-bold mb-4">{assignmentDetails.title}</h2>

                <div 
                className={`border-2 ${isDragging ? 'border-blue-500' : 'border-gray-400'} p-6 rounded-lg mb-4`}
                onDrop={handleFileDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                >
                {selectedFiles.length === 0 ? (
                    <div className="text-center">
                    <p className="text-gray-700 mb-4">Drag & Drop your files here</p>
                    <p className="text-gray-700 mb-4">or</p>
                    <input
                        type="file"
                        multiple
                        className="hidden"
                        id="fileInput"
                        accept=".pdf,.docx"
                        onChange={handleFileChange}
                    />
                    <label htmlFor="fileInput" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 cursor-pointer">
                        Browse Files
                    </label>
                    </div>
                ) : (
                    <div>
                    <p className="text-gray-700">Files ready for submission:</p>
                    <ul className="list-disc list-inside text-gray-600">
                        {selectedFiles.map((file, index) => (
                        <li key={index}>{file.name}</li>
                        ))}
                    </ul>
                    </div>
                )}
                </div>

                <p className="text-gray-700 mb-4">
                <strong>Maximum File Size:</strong> {assignmentDetails.maxFileSize}, 
                <strong> Maximum Number of Files:</strong> {assignmentDetails.maxFiles}, 
                <strong> Allowed File Types:</strong> {assignmentDetails.allowedFileTypes.join(', ')}
                </p>

                <div className="flex space-x-4">
                <button 
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                    onClick={handleSubmit}
                >
                    Submit Assignment
                </button>
                <button 
                    className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
                    onClick={handleCancel}
                >
                    Cancel
                </button>
                </div>
            </div>
        </div>
    </div>
    
  );
};

export default SubmitAssignment;
