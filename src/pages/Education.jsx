import { Academy } from 'components/Academy';
import { MiniHeader } from 'components/MiniHeader';
import React from 'react';

const Education = () => {
  return (
    <div className='flex flex-col gap-12 p-4 px-8'>
      <div className='flex flex-row items-center gap-3'>
        <div className='w-1/2 flex flex-col gap-5'>
          <MiniHeader text='Educación' />
          <h1 className='title'>MI FORMACIÓN ACADÉMICA HASTA AHORA</h1>
        </div>
        <p className='paragraph w-1/2'>
          Siempre mis estudios han sido enfocados en los sistemas, el amor hacía
          estos nace desde mi familia.
        </p>
      </div>
      <div className='flex flex-row w-full'>
        <h3 className='w-1/3 text-center'>ESTUDIOS:</h3>
        <div className='w-2/3 flex flex-col gap-3'>
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
};

export { Education };
