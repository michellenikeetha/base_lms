// components/EditAssignment.js
import React from 'react';
import SignedInNavbar from './SignedInNavbar';
import pdfimg from '../assets/pdf.png';

const EditAssignment = () => {
  const assignment = {
    title: 'Assignment 2',
    fileName: '20200742-assignment2.pdf',
    dueDate: 'Sunday, 11 August, 11:59 PM',
    submittedDate: 'Friday, 9 August, 12:39 PM',
    daysEarly: 66,
    fileSize: '2 GB',
    allowedFileTypes: ['PDF', 'DOCX'],
    maxFiles: 10,
  };

  const handleSaveChanges = () => {
    console.log("Changes saved");
  };

  const handleRemoveSubmission = () => {
    console.log("Submission removed");
  };

  const handleCancel = () => {
    console.log("Edit canceled");
  };

  return (
    <div>
      <SignedInNavbar />
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-6">Edit Your Assignment</h1>

        <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">{assignment.title}</h2>
          <div className="flex items-center space-x-4 mb-4">
            <img src={pdfimg} alt="PDF Icon" className="w-12 h-12" />
            <div>
              <p><strong>File Name:</strong> {assignment.fileName}</p>
              <p><strong>Due:</strong> {assignment.dueDate}</p>
              <p><strong>Submitted:</strong> {assignment.submittedDate}</p>
              <p><strong>Assignment was submitted {assignment.daysEarly} days early</strong></p>
            </div>
          </div>

          <p className="text-gray-700 mb-4">
            <strong>Maximum File Size:</strong> {assignment.fileSize}, 
            <strong> Maximum Number of Files:</strong> {assignment.maxFiles}, 
            <strong> Allowed File Types:</strong> {assignment.allowedFileTypes.join(', ')}
          </p>

          <div className="flex space-x-4">
            <button 
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              onClick={handleSaveChanges}
            >
              Save Changes
            </button>
            <button 
              className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
              onClick={handleRemoveSubmission}
            >
              Remove Submission
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

export default EditAssignment;
