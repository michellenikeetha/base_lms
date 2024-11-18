// src/components/MyCourseCard.js
import React from 'react';

const MyCourseCard = ({ image, title, description, progress }) => {
  return (
    <div className="flex items-center bg-white shadow-md rounded-lg p-4 mb-4">
      <img src={image} alt={title} className="w-32 h-24 rounded-md object-cover" />
      <div className="flex-grow px-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        {progress !== undefined && (
          <p className="text-sm text-gray-500">Progress: {progress}%</p>
        )}
      </div>
      <button
        className={`${
          progress !== undefined ? 'bg-black' : 'bg-blue-500'
        } text-white px-4 py-2 rounded-lg hover:opacity-90`}
      >
        {progress !== undefined ? 'Resume' : 'Get Started'}
      </button>
    </div>
  );
};

export default MyCourseCard;
