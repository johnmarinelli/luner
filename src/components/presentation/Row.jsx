import React from 'react';
import Line from './Line';
import Counter from './Counter';

const Row = ({
  index,
  maxSyllableCount,
  syllables,
  lineContent,
  onLineKeyUp
}) => 
  <div>
    <Line 
      onKeyUp={onLineKeyUp} 
      index={index} 
      lineContent={lineContent}
      maxSyllableCount={maxSyllableCount} />
    <Counter
      count={syllables}
      max={maxSyllableCount} />
  </div>

export default Row;
