import React from 'react';
import { omit } from 'lodash';

import './styles.css';

const Button = (props) => {
  const { children } = props;
  const newProps = omit(props, 'children');

  return (
    <button {...newProps}>
      {children}
    </button>
  );
}

export default Button;
