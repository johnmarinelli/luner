import React from 'react';

const Counter = ({
  count,
  max,
  inputName
}) => 
  <span
    htmlFor={inputName} 
    className="label">
      {count} / {max}
  </span>;

export default Counter;
