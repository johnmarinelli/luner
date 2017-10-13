import React from 'react';
import { connect } from 'react-redux';
import './Line.css';

let Line = ({
  index,
  maxSyllableCount,
  lineContent,
  onKeyUp,
  dispatch
}) =>  {
  return (
    <div>
      <input 
        type="text"
        onKeyUp={onKeyUp}
        placeholder={'' === lineContent ? 'default value' : ''}
        defaultValue={lineContent}
        className="line"
        maxsyllablecount={maxSyllableCount}
        maxLength={maxSyllableCount * 10}
        />
    </div>
  );
}

Line = connect()(Line);

export default Line;
