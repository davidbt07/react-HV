import React from 'react';
import { FaGithub, FaFacebook, FaLinkedinIn, FaMailBulk } from 'react-icons/fa';

export const SocialMedia = ({ icon, social, account }) => (
  <div className='flex flex-row items-center gap-3 w-2/5'>
    <div className='text-3xl'>
      {icon === 'github' && <FaGithub />}
      {icon === 'facebook' && <FaFacebook />}
      {icon === 'linkedin' && <FaLinkedinIn />}
      {icon === 'email' && <FaMailBulk />}
    </div>
    <div>
      <h3 className='subtitle'>{social}</h3>
      <p className='paragraph text-white'>{account}</p>
    </div>
  </div>
);
