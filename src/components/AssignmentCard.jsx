// components/AssignmentCard.js
import React from 'react';

const AssignmentCard = ({ assignment }) => {
  const { title, dueDate, time, courseCode, courseName } = assignment;

  return (
    <div className="bg-blue-100 p-4 mb-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">
        <i className="fas fa-file-alt"></i> {title}
      </h2>
      <p className="text-gray-700 mb-1">
        <i className="fas fa-clock"></i> {dueDate}, {time}
      </p>
      <p className="text-gray-700 mb-1">
        <i className="fas fa-calendar-alt"></i> Course Event
      </p>
      <p className="text-gray-700 mb-1">
        <i className="fas fa-book"></i> {courseCode} {courseName}
      </p>
      <button className="bg-blue-600 text-white rounded-full py-2 px-4 mt-4 hover:bg-blue-500">
        Submit
      </button>
    </div>
  );
};

export default AssignmentCard;
