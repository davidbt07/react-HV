import { GeneralInfo } from 'components/GeneralInfo';
import { HobbieCard } from 'components/HobbieCard';
import React from 'react';

export const Hobbies = () => (
  <div className='flex flex-col gap-12 border-bottom-container py-12 px-2 sm:px-9'>
    <GeneralInfo
      section='Hobbies'
      title='Y FINALMENTE, EN MI TIEMPO LIBRE LO QUE ME GUSTA HACER ES:'
      paragraph='Y bueno... esto es lo que hago cuando no estoy trabajando o estudiando.'
      type='row'
    />
    <div className='flex flex-col sm:flex-row gap-6 lg:gap-12 justify-center items-center'>
      <HobbieCard logo='videogame' hobbie='JUGAR VIDEOJUEGOS' />
      <HobbieCard logo='futbol' hobbie='VER FÚTBOL' />
      <HobbieCard logo='movie' hobbie='VER PELÍCULAS' />
      <HobbieCard logo='programming' hobbie='HACER CURSOS DE PROGRAMACIÓN' />
    </div>
  </div>
);
