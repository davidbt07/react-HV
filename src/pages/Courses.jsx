import { CourseCard } from 'components/CourseCard';
import { GeneralInfo } from 'components/GeneralInfo';
import React from 'react';

export const Courses = () => {
  return (
    <div>
      <GeneralInfo
        section='Cursos y Certificaciones'
        title='CURSOS Y CERTIFICACIONES QUE HE COMPLETADO EN DIFERENTES PLATAFORMAS'
        paragraph='Aunque no son todos los cursos que he hecho, sí son los que considero más importantes.'
        type='row'
      />
      <div>
        <CourseCard
          icon='angular'
          course='Universidad Desarrollo Web-FrontEnd Web Developer!'
          platform='Udemy'
          date='2021'
        />
      </div>
    </div>
  );
};
