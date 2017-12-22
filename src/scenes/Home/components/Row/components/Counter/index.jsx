import React from 'react';

import './styles.css';

const Counter = ({ count, max, inputName }) => (
  <div htmlFor={inputName} className="label">
    {count} / {max}
  </div>
);

export default Counter;
