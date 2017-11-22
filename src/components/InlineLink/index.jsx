import React from 'react';
import { NavLink } from 'react-router-dom';
import { omit } from 'lodash';

import './styles.css';

const InlineLink = (props) => {
  const { children } = props;
  const newProps = omit(props, 'children');

  return (
    <NavLink to='/' className='inline' {...newProps}>
      {children}
    </NavLink>
  );
};

export default InlineLink;
