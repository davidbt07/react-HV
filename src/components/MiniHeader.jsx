import React from 'react';
import { MdSegment } from 'react-icons/md';

export const MiniHeader = ({ text }) => (
  <div className='flex flex-row items-center text-violet-900'>
    <h2 className='subtitle'>{text}... </h2>
    <MdSegment className='sm:text-lg md:text-xl lg:text-2xl' />
  </div>
);
