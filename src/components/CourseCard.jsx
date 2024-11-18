// components/CourseCard.js
import React from 'react';

const CourseCard = ({ course, isEnrolled }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div
        className="h-32 bg-gray-200 rounded-lg mb-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${course.imageUrl})` }}
      ></div>
      <h3 className="text-lg font-bold mb-2">{course.title}</h3>
      <p className="text-sm text-gray-600">{course.semester}</p>

      {isEnrolled ? (
        <p className="text-sm text-blue-600 mt-4">{course.progress}% Complete</p>
      ) : (
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
          Enroll now
        </button>
      )}
    </div>
  );
};

export default CourseCard;
