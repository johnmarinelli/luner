import React from 'react';
import { omit } from 'lodash';

const InlineLink = (props) => {
  const { children } = props;
  const newProps = omit(props, 'children');

  return (
    <a style={{padding: '0px'}} {...newProps}>
      {children}
    </a>
  );
};

export default InlineLink;
