import React from 'react';
import {
  FaAngular,
  FaBootstrap,
  FaDatabase,
  FaHtml5,
  FaJava,
  FaNodeJs,
} from 'react-icons/fa';

export const CourseCard = ({ icon, course, platform, date }) => (
  <div className='flex flex-col items-center bg-[#18191A] w-10/12 sm:w-5/12 text-center gap-4 py-2'>
    <div className='text-violet-700 sm:text-2xl md:text-3xl lg:text-4xl'>
      {icon === 'angular' && <FaAngular />}
      {icon === 'java' && <FaJava />}
      {icon === 'html' && <FaHtml5 />}
      {icon === 'sql' && <FaDatabase />}
      {icon === 'bootstrap' && <FaBootstrap />}
      {icon === 'js' && <FaNodeJs />}
    </div>
    <h3 className='subtitle'>{course}</h3>
    <h4 className='paragraph text-gray-400'>Curso realizado en: {platform}</h4>
    <p className='paragraph text-gray-400'>{date}</p>
  </div>
);
