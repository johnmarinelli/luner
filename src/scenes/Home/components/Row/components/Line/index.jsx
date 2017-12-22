import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '../../../../../../components';

import './styles.css';

class Line extends React.Component {
  focus() {
    this.input.focus();
  }

  setFirstChar(c) {
    this.input.setValue(c + this.input.getValue());
  }

  clearInput() {
    this.input.setValue('');
  }

  constructor() {
    super();
    this.input = null;
  }

  render() {
    const { index, maxSyllableCount, lineContent, onKeyUp } = this.props;
    const autofocus = 0 === index;

    return (
      <Input
        ref={input => (this.input = input)}
        type="text"
        onKeyUp={onKeyUp}
        defaultValue={lineContent}
        className="line"
        maxsyllablecount={maxSyllableCount}
        maxLength={maxSyllableCount * 10}
        autoFocus={autofocus}
        spellCheck="true"
      />
    );
  }
}

Line.propTypes = {
  index: PropTypes.number.isRequired,
  maxSyllableCount: PropTypes.number.isRequired,
  lineContent: PropTypes.string,
  onKeyUp: PropTypes.func
};

export default Line;
