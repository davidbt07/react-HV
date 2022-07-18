import React from 'react';
import { MdStar, MdStarHalf, MdStarOutline } from 'react-icons/md';

export const LanguageCard = ({ language, level }) => {
  const nivel = level;
  return (
    <div className='flex flex-col'>
      <h3>{language}</h3>
      <div className='text-violet-700 text-5xl'>
        {nivel === '3.5' && (
          <div className='flex flex-row'>
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStarHalf />
            <MdStarOutline />
          </div>
        )}
        {nivel === '5' && (
          <div className='flex flex-row'>
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
          </div>
        )}
      </div>
    </div>
  );
};
