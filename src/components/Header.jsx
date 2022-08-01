import { React, useRef } from 'react';
import { MdOutlineMoreVert } from 'react-icons/md';
import { FaGithub, FaFacebook, FaLinkedinIn } from 'react-icons/fa';

export const Header = () => {
  const menu = useRef(null);

  const abrir = () => {
    menu.current.style.display = 'block';
  };
  const cerrar = () => {
    menu.current.style.display = 'none';
  };

  window.onclick = (event) => {
    if (menu.current.contains(event.target)) {
      menu.current.style.display = 'none';
    }
  };
  return (
    <nav className='flex flex-row items-center p-3 w-screen justify-between border-bottom-container transparentColor fixed z-50'>
      <button type='button' id='openMenu' onClick={abrir}>
        <MdOutlineMoreVert className='text-white lg:text-2xl' />
      </button>
      <div className='text-white title'>
        <a href='#front'>Yeison</a>
      </div>
      <div className='opacity-1'>.</div>

      <div id='menu' className='modal text-white h-screen w-screen' ref={menu}>
        <div className='modal-content h-full w-2/3 sm:w-1/3 flex flex-col gap-12 lg:gap-16'>
          <div className='header-modal w-full flex flex-row justify-between pl-16'>
            <h1 className='title'>
              <a href='#front'>YB</a>
            </h1>
            <button type='button' onClick={cerrar}>
              <MdOutlineMoreVert className='text-white lg:text-2xl close-modal' />
            </button>
          </div>
          <div className='pages px-6 bg-[#0B1014]'>
            <ul className='list-disc paragraph'>
              <li>
                <a href='#aboutme'>INFORMACIÓN GENERAL</a>
              </li>
              <li>
                <a href='#education'>INFORMACIÓN ACADÉMICA</a>
              </li>
              <li>
                <a href='#experience'>INFORMACIÓN LABORAL</a>
              </li>
              <li>
                <a href='#languages'>IDIOMAS</a>
              </li>
              <li>
                <a href='#courses'>CURSOS</a>
              </li>
              <li>
                <a href='#hobbies'>HOBBIES</a>
              </li>
            </ul>
          </div>
          <div className='icons w-2/3 sm:w-1/3 flex flex-row sm:fixed sm:bottom-6 text-3xl justify-center gap-4'>
            <FaGithub />
            <FaFacebook />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </nav>
  );
};
