import React from 'react';
// eslint-disable-next-line no-restricted-imports
import { Aboutme } from './Aboutme';
// eslint-disable-next-line no-restricted-imports
import { Education } from './Education';
// eslint-disable-next-line no-restricted-imports
import { Front } from './Front';

const Home = () => (
  <main className='flex flex-col'>
    <Front />
    <Aboutme />
    <Education />
  </main>
);

export { Home };
