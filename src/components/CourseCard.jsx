import React from 'react';
import { FaAngular } from 'react-icons/fa';

export const CourseCard = ({ icon, course, platform, date }) => {
  return (
    <div className='bg-gray-900'>
      {icon === 'angular' && <FaAngular />}
      <h3>{course}</h3>
      <h4>Curso realizado en: {platform}</h4>
      <p>{date}</p>
    </div>
  );
};
