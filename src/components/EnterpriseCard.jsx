import React from 'react';

export const EnterpriseCard = ({ picture, date, enterprise, job }) => (
  <div className='relative' id='enterprise'>
    <img src={picture} alt={enterprise} />
    <div className='absolute bottom-0 translate-y-6 bg-black p-4 info'>
      <h3 className='text-violet-900'>{date}</h3>
      <h3 className='text-white'>{enterprise}</h3>
      <h4 className='text-violet-900'>Rol: {job}</h4>
    </div>
  </div>
);
