import React from 'react';
import { omit } from 'lodash';

import './styles.css';

class Button extends React.Component {
  render () {
    const { children } = this.props;
    const newProps = omit(this.props, 'children');

    return (
      <button {...newProps}>
        {children}
      </button>
    );
  }
}

export default Button;
