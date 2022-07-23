import React from 'react';
import { MiniHeader } from 'components/MiniHeader';

export const GeneralInfo = ({ section, title, paragraph, type }) => (
  <div>
    {type === 'row' && (
      <div className='flex flex-row items-center gap-3'>
        <div className='w-1/2 flex flex-col gap-5'>
          <MiniHeader text={section} />
          <h1 className='title'>{title}</h1>
        </div>
        <p className='paragraph text-gray-400 w-1/2'>{paragraph}</p>
      </div>
    )}
    {type === 'col' && (
      <div className='flex flex-col'>
        <div className='flex flex-col'>
          <MiniHeader text={section} />
          <h1 className='title'>{title}</h1>
        </div>
        <p className='paragraph text-gray-400'>{paragraph}</p>
      </div>
    )}
  </div>
);
