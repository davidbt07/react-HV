import { GeneralInfo } from 'components/GeneralInfo';
import { LanguageCard } from 'components/LanguageCard';
import React from 'react';

export const Languages = () => (
  <div
    id='languages'
    className='flex flex-col gap-12 border-bottom-container py-12 px-2 sm:px-9'
  >
    <GeneralInfo
      section='Idiomas'
      title='IDIOMAS EN LOS QUE PUEDO DESEMPEÑARME'
      paragraph='Mi lengua nativa es el Español, sin embargo siempre he tenido gusto por aprender inglés.'
      type='row'
    />
    <div className='flex flex-row gap-12 justify-center'>
      <LanguageCard language='ESPAÑOL' level='5' />
      <LanguageCard language='INGLÉS' level='3.5' />
    </div>
  </div>
);
