import { GeneralInfo } from 'components/GeneralInfo';
import { LanguageCard } from 'components/LanguageCard';
import React from 'react';

export const Languages = () => (
  <div className='flex flex-col gap-12 border-bottom-container py-12 px-9'>
    <GeneralInfo
      section='Idiomas'
      title='IDIOMAS EN LOS QUE PUEDO DESEMPEÑARME'
      paragraph='Mi lengua nativa es el Español, sin embargo siempre te tenido gusto por aprender inglés.'
      type='row'
    />
    <div className='flex flex-row gap-12 justify-center'>
      <LanguageCard language='ESPAÑOL' level='5' />
      <LanguageCard language='INGLÉS' level='3.5' />
    </div>
  </div>
);
