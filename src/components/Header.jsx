import React from 'react';
import { MdOutlineMoreVert } from 'react-icons/md';

export const Header = () => {
  return (
    <nav className='flex flex-row items-center p-3 w-screen justify-between border-bottom-container transparentColor fixed z-50'>
      <MdOutlineMoreVert className='text-white lg:text-2xl' />
      <div className='text-white font-bold'>Yeison</div>
      <div className='opacity-1'>.</div>
    </nav>
  );
};
