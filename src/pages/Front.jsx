import React from 'react';

const Front = () => {
  // Get the modal
  const modal = document.getElementById('menu');

  // Get the button that opens the modal
  const btn = document.getElementById('openMenu');

  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName('close-modal')[0];

  // When the user clicks on the button, open the modal
  btn.onclick = () => {
    modal.style.display = 'block';
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = () => {
    modal.style.display = 'none';
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
  return (
    <div className='relative z-0 text-center w-screen' id='front'>
      <img
        src='https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        alt='imagen'
        className='w-screen'
      />
      <div className='greetings text-white absolute flex flex-col inset-1/4'>
        <h1 className='Bigtitle text-center'>
          ¡Hola! Mi nombre es <br />
          Yeison David Ballesteros
        </h1>
        <p className='m-8 text-center paragraph text-white'>
          !Soy estudiante de Ingeniería de Sistemas y esta es mi hoja de vida!
        </p>
      </div>
    </div>
  );
};

export { Front };
