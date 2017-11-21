import React from 'react';
import { omit } from 'lodash';

import './styles.css';

const Input = (props) => {
  const { children } = props;
  const newProps = omit(props, 'children');

  return (
    <input {...newProps}>
      {children}
    </input>
  );
}

export default Input;
