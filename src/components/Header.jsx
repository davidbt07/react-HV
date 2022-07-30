import React from 'react';
import { MdOutlineMoreVert } from 'react-icons/md';
import { FaGithub, FaFacebook, FaLinkedinIn } from 'react-icons/fa';

export const Header = () => (
  <nav className='flex flex-row items-center p-3 w-screen justify-between border-bottom-container transparentColor fixed z-50'>
    <button type='button' id='openMenu'>
      <MdOutlineMoreVert className='text-white lg:text-2xl' />
    </button>
    <div className='text-white title'>Yeison</div>
    <div className='opacity-1'>.</div>

    <div id='menu' className='modal text-white h-screen w-screen'>
      <div className='modal-content h-full w-1/3 flex flex-col gap-16'>
        <div className='header-modal w-full flex flex-row justify-between pl-16'>
          <h1 className='title'>YB</h1>
          <button type='button'>
            <MdOutlineMoreVert className='text-white lg:text-2xl close-modal' />
          </button>
        </div>
        <div className='pages px-6 bg-[#0B1014]'>
          <ul className='list-disc paragraph'>
            <li>INFORMACIÓN GENERAL</li>
            <li>INFORMACIÓN ACADÉMICA</li>
            <li>INFORMACIÓN LABORAL</li>
            <li>IDIOMAS</li>
            <li>CURSOS</li>
            <li>HOBBIES</li>
          </ul>
        </div>
        <div className='icons w-1/3 flex flex-row fixed bottom-0 text-3xl justify-center gap-4'>
          <FaGithub />
          <FaFacebook />
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  </nav>
);
