import React from 'react';
import { connect } from 'react-redux';
import { haikuLineDone } from '../../action-creators';
import './Line.css';

let Line = ({
  index,
  maxSyllableCount,
  onKeyUp,
  dispatch
}) =>  {
  let input;

  return (
    <div>
      <input 
        type="text"
        ref={node => input = node}
        onKeyUp={onKeyUp}
        placeholder="default value" 
        className="line"
        maxsyllablecount={maxSyllableCount}
        maxLength={maxSyllableCount * 10}
        />
    </div>
  );
}

Line = connect()(Line);

export default Line;
