import React from 'react';
import PropTypes from 'prop-types';
import { HaikuLine, ListItem } from './components';

const HaikuListItem = ({
  haiku
}) => 
  <ListItem key={haiku.id}>
    {haiku.lines.map((line, idx) => 
      <HaikuLine
        line={line.content} 
        key={idx} />)}
    <span>- {haiku.author || 'anonymous'}</span>
  </ListItem>

HaikuListItem.propTypes = {
  haiku: PropTypes.object.isRequired
};

export default HaikuListItem;
