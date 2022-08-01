import { Academy } from 'components/Academy';
import { GeneralInfo } from 'components/GeneralInfo';
import React from 'react';

const Education = () => (
  <div
    id='education'
    className='flex flex-col gap-12 py-12 px-2 sm:px-8 border-bottom-container'
  >
    <GeneralInfo
      section='Educación'
      title='MI FORMACIÓN ACADÉMICA HASTA AHORA'
      paragraph='Siempre mis estudios han sido enfocados en los sistemas, el amor hacía
          estos nace desde mi familia.'
      type='row'
    />
    <div className='flex flex-col lg:flex-row w-full gap-5 px-4'>
      <h3 className='w-full sm:w-1/3 lg:text-center subtitle'>ESTUDIOS:</h3>
      <div className='w-fit sm:w-2/3 flex flex-col gap-3'>
        <Academy
          institute='UNIVERSIDAD DE ANTIOQUIA'
          degree='INGENIERÍA EN SISTEMAS-ENFS. DESARROLLO DE SOFTWARE'
          date='2015-2022'
        />
        <Academy
          institute='INSTITUCIÓN EDUCATIVA RICARDO URIBE ESCOBAR'
          degree='BACHILLER TÉCNICO EN SISTEMAS'
          date='2006-2011'
        />
        <Academy
          institute='INSTITUCIÓN EDUCATIVA FRANCISCO MIRANDA'
          degree='BÁSICA PRIMARIA'
          date='2000-2005'
        />
      </div>
    </div>
  </div>
);

export { Education };
