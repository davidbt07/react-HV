import { Academy } from 'components/Academy';
import { GeneralInfo } from 'components/GeneralInfo';
import React from 'react';

const Education = () => {
  return (
    <div className='flex flex-col gap-12 py-12 px-8 border-bottom-container'>
      <GeneralInfo
        section='Educación'
        title='MI FORMACIÓN ACADÉMICA HASTA AHORA'
        paragraph='Siempre mis estudios han sido enfocados en los sistemas, el amor hacía
          estos nace desde mi familia.'
        type='row'
      />
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
