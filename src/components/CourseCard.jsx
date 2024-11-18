// components/CourseCard.js
import React from 'react';

const CourseCard = ({ course, isEnrolled }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-1/2 lg:w-1/4">
      <div className="bg-gray-200 h-32 rounded-lg mb-4" style={{ backgroundImage: `url(${course.imageUrl})` }}></div>
      <h3 className="text-lg font-bold mb-2">{course.title}</h3>
      <p className="text-sm text-gray-600">{course.semester}</p>
      
      {isEnrolled ? (
        <p className="text-sm text-blue-600 mt-4">{course.progress}% Complete</p>
      ) : (
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg">Enroll now</button>
      )}
    </div>
  );
};

export default CourseCard;
