import React from 'react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

const CodeTyping = () => {
  return (
    <Typist className='typist'>
      <span>Prueba</span>
      <Typist.Delay ms={500} />
      <br />
      <span>Prueba2</span>
      <Typist.Delay ms={500} />
      <br />
      <span>Prueba3</span>
      <Typist.Delay ms={500} />
      <br />
      <span>prueba 4</span>
      <Typist.Delay ms={500} />
      <br />
      <span>Prueba5</span>
      <Typist.Delay ms={500} />
      <br />
      <span>prueba 6</span>
      <Typist.Delay ms={500} />
      <br />
      <span>prueba 7</span>
      <Typist.Delay ms={500} />
      <br />
      <span>prueba 8</span>
    </Typist>
  );
}

export default CodeTyping;
