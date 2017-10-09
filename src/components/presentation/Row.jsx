import React from 'react';
import Line from './Line';
import Counter from './Counter';

const Row = ({
  index,
  maxSyllableCount,
  syllables,
  onLineKeyUp
}) => 
  <div>
    <Line 
      onKeyUp={onLineKeyUp} 
      index={index} 
      maxSyllableCount={maxSyllableCount} />
    <Counter
      count={syllables}
      max={maxSyllableCount} />
  </div>

export default Row;
