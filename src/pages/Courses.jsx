import { CourseCard } from 'components/CourseCard';
import { GeneralInfo } from 'components/GeneralInfo';
import React from 'react';

export const Courses = () => (
  <div className='flex flex-col gap-12 border-bottom-container py-12 px-9'>
    <GeneralInfo
      section='Cursos y Certificaciones'
      title='CURSOS Y CERTIFICACIONES QUE HE COMPLETADO EN DIFERENTES PLATAFORMAS'
      paragraph='Aunque no son todos los cursos que he hecho, sí son los que considero más importantes.'
      type='row'
    />
    <div className='flex flex-row flex-wrap gap-4 lg:gap-12 justify-center'>
      <CourseCard
        icon='html'
        course='Universidad Desarrollo Web- FrontEnd Web Developer!'
        platform='Udemy'
        date='2021'
      />
      <CourseCard
        icon='angular'
        course='Front-End JavaScript Frameworks: Angular'
        platform='Coursera'
        date='2021'
      />
      <CourseCard
        icon='java'
        course='Universidad Java - De Cero a Experto - Más Completo +106 hrs'
        platform='Udemy'
        date='2021'
      />
      <CourseCard
        icon='bootstrap'
        course='Bootstrap From Scratch - Fast and Responsive Development'
        platform='Udemy'
        date='2021'
      />
      <CourseCard
        icon='sql'
        course='Oracle SQL - A Complete Introduction'
        platform='Udemy'
        date='2020'
      />
      <CourseCard
        icon='js'
        course='Create a REST API With Node JS and Mongo DB'
        platform='Udemy'
        date='2020'
      />
    </div>
  </div>
);
