import React from 'react';
import { MiniHeader } from 'components/MiniHeader';

export const GeneralInfo = ({ section, title, paragraph, type }) => (
  <div id='general-info'>
    {type === 'row' && (
      <div className='flex flex-col lg:flex-row lg:items-center mx-3.5 gap-5'>
        <div className='w-1/2 flex flex-col gap-5 sm:w-fit'>
          <MiniHeader text={section} />
          <h1 className='title'>{title}</h1>
        </div>
        <p className='paragraph text-gray-400 w-fit lg:w-1/2'>{paragraph}</p>
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
