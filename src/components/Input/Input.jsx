import React from 'react';
import { omit } from 'lodash';

import './styles.css';

class Input extends React.Component {

  focus () {
    return this.htmlElement.focus();
  }

  getValue () {
    return this.htmlElement.value;
  }

  setValue (val) {
    this.htmlElement.value = val;
    return val;
  }

  constructor () {
    super();
    this.htmlElement = null;
    this.focus = this.focus.bind(this);
    this.getValue = this.getValue.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  render () {
    const { props } = this;
    const { children } = props;
    const newProps = omit(props, 'children');

    return (
      <input 
        ref={el => this.htmlElement = el} 
        {...newProps}>
        {children}
      </input>
    );
  }
}

export default Input;
