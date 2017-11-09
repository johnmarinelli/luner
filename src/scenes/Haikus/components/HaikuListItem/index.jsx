import React from 'react';
import { HaikuLine, ListItem } from './components';

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
