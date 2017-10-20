import React from 'react';
import PropTypes from 'prop-types';
import './Line.css';

class Line extends React.Component {

  focus () {
    this.input.focus();
  }

  setFirstChar (c) {
    this.input.value = c + this.input.value;
  }

  constructor () {
    super();
    this.input = null;
  }

  render () {
    const {
      index,
      maxSyllableCount,
      lineContent,
      onKeyUp
    } = this.props;
    const autofocus = 0 === index;

    return (
      <div className="line-wrapper">
        <input 
          ref={input => this.input = input}
          type="text"
          onKeyUp={onKeyUp}
          placeholder={'' === lineContent ? 'default value' : ''}
          defaultValue={lineContent}
          className="line"
          maxsyllablecount={maxSyllableCount}
          maxLength={maxSyllableCount * 10}
          autoFocus={autofocus}
          />
      </div>
    );
  }
};

Line.propTypes = {
  index: PropTypes.number.isRequired,
  maxSyllableCount: PropTypes.number.isRequired,
  lineContent: PropTypes.string,
  onKeyUp: PropTypes.func
};

export default Line;
