import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import Upvote from '../Upvote';
import HaikuLine from '../HaikuLine';
import { ListItem } from './components';

const HaikuListItem = ({ haiku, sendUpvote }) => {
  /*
   * TODO: refactor facebook profile button into its own class
   * or link it in the author
   */
  const { fbProfile } = haiku;
  const fbStyle = {
    padding: '0',
    margin: '5px',
    background: 'blue'
  };
  const fbConnection = fbProfile ? (
    <span>
      <a style={fbStyle} target="_blank" href={fbProfile.link}>
        <FontAwesome name="facebook" />
      </a>
    </span>
  ) : null;

  return (
    <ListItem>
      {haiku.lines.map((line, idx) => (
        <HaikuLine line={line.content} key={idx} />
      ))}
      <span>- {haiku.author || 'anonymous'}</span>
      {fbConnection}
      <Upvote numUpvotes={haiku.upvotes || 0} sendUpvote={sendUpvote} />
    </ListItem>
  );
};

HaikuListItem.propTypes = {
  haiku: PropTypes.object.isRequired,
  sendUpvote: PropTypes.func
};

export default HaikuListItem;
