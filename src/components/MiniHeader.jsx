import React from 'react';
import { MdSegment } from 'react-icons/md';

export const MiniHeader = ({ text }) => (
  <div className='flex flex-row items-center text-violet-900'>
    <h2>{text}... </h2>
    <MdSegment className='text-xl' />
  </div>
);
