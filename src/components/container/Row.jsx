import React from 'react';
import PropTypes from 'prop-types';
import Line from './Line';
import Counter from '../presentation/Counter';

import './Row.css';

class Row extends React.Component {

  focus () {
    this.line.focus();
  }

  setFirstChar (c) {
    this.line.setFirstChar(c);
  }

  constructor () {
    super();
    this.line = null;
  }

  render () {
    const {
      index,
      maxSyllableCount,
      syllables,
      lineContent,
      onLineKeyUp
    } = this.props;

    return (
      <div className="form-group row-wrapper">
        <Counter
          count={syllables}
          max={maxSyllableCount} />
        <Line 
          ref={line => this.line = line}
          onKeyUp={onLineKeyUp} 
          index={index} 
          lineContent={lineContent}
          maxSyllableCount={maxSyllableCount} />
      </div>
    );
  }
};

Row.propTypes = {
  index: PropTypes.number.isRequired,
  maxSyllableCount: PropTypes.number.isRequired,
  syllables: PropTypes.number,
  lineContent: PropTypes.string,
  onLineKeyUp: PropTypes.func
};

export default Row;
