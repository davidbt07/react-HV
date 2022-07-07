/* eslint-disable no-restricted-imports */
import React from 'react';
import { Aboutme } from './Aboutme';
import { Courses } from './Courses';
import { Education } from './Education';
import { Experience } from './Experience';
import { Front } from './Front';
import { Hobbies } from './Hobbies';
import { Languages } from './Languages';

const Home = () => (
  <main className='flex flex-col'>
    <Front />
    <Aboutme />
    <Education />
    <Experience />
    <Languages />
    <Courses />
    <Hobbies />
  </main>
);

export { Home };
