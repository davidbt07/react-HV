import React from 'react';
import { Aboutme } from 'pages/Aboutme';
import { Courses } from 'pages/Courses';
import { Education } from 'pages/Education';
import { Experience } from 'pages/Experience';
import { Front } from 'pages/Front';
import { Hobbies } from 'pages/Hobbies';
import { Languages } from 'pages/Languages';

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
