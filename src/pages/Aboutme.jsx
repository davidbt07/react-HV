import { MiniHeader } from 'components/MiniHeader';
import React from 'react';

export const Aboutme = () => {
  return (
    <div>
      <div className='flex flex-row w-screen mt-12 mx-9 gap-10'>
        <img
          src='https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          alt='Foto Yeison'
          className='w-2/5 h-96'
        />
        <div id='personal-info' className='w-2/5'>
          <MiniHeader text='Acerca de mí' />

          <h1 className='title'>
            SOY YEISON BALLESTEROS, DESARROLLADOR DE SOFTWARE.
          </h1>
          <p className='paragraph'>
            Soy estudiante de Ingeniería de Sistemas con énfasis en el
            Desarrollo de Software, más específicamente enfocado en el
            desarrollo web.
          </p>

          <div id='vignettes'>
            <ul className='list-disc'>
              <li>
                <span>Especialidad: </span>Desarrollador Web
              </li>
              <li>
                <span>Especialidad: </span>Desarrollador Web
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>redes</div>
    </div>
  );
};
