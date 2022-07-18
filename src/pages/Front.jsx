import React from 'react';

const Front = () => (
  <div className='relative z-0 text-center' id='front'>
    <img
      src='https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      alt='imagen'
      className='w-screen h-4/5'
    />
    <div className='text-white absolute flex flex-col inset-1/4'>
      <h1 className='Bigtitle text-center'>
        ¡Hola! Mi nombre es <br />
        Yeison David Ballesteros
      </h1>
      <p className='m-8 text-center'>
        !Soy estudiante de Ingeniería de Sistemas y esta es mi hoja de vida!
      </p>
    </div>
  </div>
);

export { Front };
