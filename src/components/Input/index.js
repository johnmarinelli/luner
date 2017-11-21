import React from 'react';
import InputView from './Input';

class Input extends React.Component {
  render () {
    return <InputView {...this.props} />
  }
};

export default Input;
