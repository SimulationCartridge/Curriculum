import React from 'react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

const CodeTyping = () => {
  return (
    <Typist className='typist'>
      <span>{"<html>"}</span>
      <Typist.Delay ms={500} />
      <br />
      <span>{"  <head>"}</span>
      <Typist.Delay ms={500} />
      <br />
      <span>{"    <title>Mi Página Web</title>"}</span>
      <Typist.Delay ms={500} />
      <br />
      <span>{"  </head>"}</span>
      <Typist.Delay ms={500} />
      <br />
      <span>{"  <body>"}</span>
      <Typist.Delay ms={500} />
      <br />
      <span>{"    <h1>Hola Mundo</h1>"}</span>
      <Typist.Delay ms={500} />
      <br />
      <span>{"  </body>"}</span>
      <Typist.Delay ms={500} />
      <br />
      <span>{"</html>"}</span>
    </Typist>
  );
}

export default CodeTyping;
