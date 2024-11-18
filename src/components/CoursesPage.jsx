// components/CoursesPage.js
import React from 'react';
import SignedInNavbar from './SignedInNavbar';
import AvailableCoursesSection from './AvailableCoursesSection';
import EnrolledCoursesSection from './EnrolledCoursesSection';

const CoursesPage = () => {
  const availableCourses = [
    { id: 1, title: 'IS4101 Final Year Project in Information Systems', semester: 'Semester I', imageUrl: '/path/to/image1.jpg' },
    { id: 2, title: 'IS4102 Advanced Software Quality Assurance', semester: 'Semester I', imageUrl: '/path/to/image2.jpg' },
    { id: 3, title: 'IS4103 Research Seminar', semester: 'Semester I', imageUrl: '/path/to/image3.jpg' },
    { id: 4, title: 'IS4109 Cognitive Robotics', semester: 'Semester I', imageUrl: '/path/to/image4.jpg' }
  ];

  const enrolledCourses = [
    { id: 5, title: 'IS4101 Final Year Project in Information Systems', semester: 'Semester I', progress: 66, imageUrl: '/path/to/image1.jpg' },
    { id: 6, title: 'IS4102 Advanced Software Quality Assurance', semester: 'Semester I', progress: 100, imageUrl: '/path/to/image2.jpg' },
    { id: 7, title: 'IS4103 Research Seminar', semester: 'Semester I', progress: 71, imageUrl: '/path/to/image3.jpg' },
    { id: 8, title: 'IS4105 Advanced Concepts in Software Design', semester: 'Semester I', progress: 60, imageUrl: '/path/to/image5.jpg' },
    { id: 9, title: 'IS4106 Data Analytics', semester: 'Semester I', progress: 43, imageUrl: '/path/to/image6.jpg' }
  ];

  return (
    <div>
      <SignedInNavbar />
      <div className="container mx-auto px-6 py-8">
        <AvailableCoursesSection availableCourses={availableCourses} />
        <EnrolledCoursesSection enrolledCourses={enrolledCourses} />
      </div>
    </div>
  );
};

export default CoursesPage;
