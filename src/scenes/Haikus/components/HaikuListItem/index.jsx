import React from 'react';
import HaikuLine from './HaikuLine';
import ListItem from './ListItem';

const HaikuListItem = ({
  haiku
}) => 
  <ListItem>
    {haiku.lines.map((line, idx) => 
      <HaikuLine
        line={line.content} 
        key={idx} />)}
    <span>- {haiku.author || 'anonymous'}</span>
  </ListItem>

export default HaikuListItem;
