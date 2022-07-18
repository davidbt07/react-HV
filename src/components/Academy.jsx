import React from 'react';

export const Academy = ({ institute, degree, date }) => (
  <div className='border-y border-y-violet-600 text-xl'>
    <h1 className='text-violet-800'>{institute}</h1>
    <h1 className='text-white'>{degree}</h1>
    <p className='text-white'>{date}</p>
  </div>
);
