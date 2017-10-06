import React from 'react';

const WordComponent = (props) => 
  <input 
    className="haiku-word"
    onKeyUp={props.onKeyUp} />;

export default WordComponent;
