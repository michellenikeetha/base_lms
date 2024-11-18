// src/pages/MyLearning.js
import React from 'react';
import MyCourseCard from '../components/MyCourseCard';
import SignedInNavbar from '../components/SignedInNavbar';
import course1 from '../assets/course1.png';
import course2 from '../assets/course2.png';
import course3 from '../assets/course3.png';
import course4 from '../assets/course4.png'

const MyLearning = () => {
  const courses = [
    {
      image: course1,
      title: 'Computer Science',
      description: 'Are you newer to Programming? Start learning basics of Computer Science as a beginner',
    },
    {
      image: course2,
      title: 'Algebra',
      description: 'Are you newer to Programming? Start learning basics of Algebra as a beginner',
      progress: 34,
    },
    {
      image: course3,
      title: 'Introduction to Biology',
      description: 'Are you newer to Programming? Start learning basics of Biology as a beginner',
    },
    {
      image: course4,
      title: 'Introduction to AI',
      description: 'Are you newer to Programming? Start learning basics of AI as a beginner',
      progress: 67,
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <SignedInNavbar />

      <main className="container mx-auto px-4 py-6">
        <div className="flex space-x-4 mb-6">
          <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
            In Progress
          </button>
          <button className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300">
            Completed
          </button>
          <button className="ml-auto px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300">
            Grades
          </button>
        </div>

        <div>
          {courses.map((course, index) => (
            <MyCourseCard key={index} {...course} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default MyLearning;
