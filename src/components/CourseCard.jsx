import React from 'react';
import {
  FaAngular,
  FaBootstrap,
  FaDatabase,
  FaHtml5,
  FaJava,
  FaNodeJs,
} from 'react-icons/fa';

export const CourseCard = ({ icon, course, platform, date }) => {
  return (
    <div className='flex flex-col items-center bg-[#18191A] w-1/3 text-center gap-4 py-2'>
      <div className='text-violet-700 text-4xl'>
        {icon === 'angular' && <FaAngular />}
        {icon === 'java' && <FaJava />}
        {icon === 'html' && <FaHtml5 />}
        {icon === 'sql' && <FaDatabase />}
        {icon === 'bootstrap' && <FaBootstrap />}
        {icon === 'js' && <FaNodeJs />}
      </div>
      <h3 className='subtitle'>{course}</h3>
      <h4 className='paragraph'>Curso realizado en: {platform}</h4>
      <p className='paragraph'>{date}</p>
    </div>
  );
};
