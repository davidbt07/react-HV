import { GeneralInfo } from 'components/GeneralInfo';
import { SocialMedia } from 'components/SocialMedia';
import React from 'react';

export const Aboutme = () => {
  return (
    <div id='aboutme' className='clearfix relative border-bottom-container'>
      <div className='flex flex-row w-screen mt-12 mx-9 gap-10'>
        <img
          src='https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          alt='Foto Yeison'
          className='w-2/4'
        />
        <div id='personal-info' className='w-2/5'>
          <GeneralInfo
            section='Acerca de mí'
            title='SOY YEISON BALLESTEROS, DESARROLLADOR DE SOFTWARE.'
            paragraph='Soy estudiante de Ingeniería de Sistemas con énfasis en el Desarrollo de
            Software, más específicamente enfocado en el desarrollo web.'
            type='col'
          />

          <div id='vignettes'>
            <ul className='list-disc'>
              <li>
                <span>Especialidad: </span>Desarrollador Web
              </li>
              <li>
                <span>Dirección: </span>Carrera 58 # 83 EE 24
              </li>
              <li>
                <span>Experiencia: </span>1 año
              </li>
              <li>
                <span>Teléfono: </span>(+57)3206127371
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        id='social'
        className='absolute inset-x-1/4 bottom-12 border-bottom-container'
      >
        <SocialMedia icon='github' social='Github' account='davidbt07' />
        <SocialMedia
          icon='linkedin'
          social='LinkedIn'
          account='Yeison Ballesteros'
        />
        <SocialMedia
          icon='email'
          social='Correo'
          account='david.ballesteros@udea.edu.co'
        />
        <SocialMedia
          icon='facebook'
          social='Facebook'
          account='Yeison Ballesteros'
        />
      </div>
    </div>
  );
};
