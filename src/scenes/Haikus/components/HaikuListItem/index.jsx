import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import Upvote from '../Upvote';
import HaikuLine from '../HaikuLine';
import { ListItem } from './components';

import './styles.css';

const HaikuListItem = ({ haiku, sendUpvote }) => {
  /*
   * TODO: refactor facebook/ig profile button into its own class
   */
  const { fbProfile, igProfile } = haiku;
  const fbStyle = {
    padding: '0 10px'
  };
  const fbConnection = fbProfile ? (
    <a style={fbStyle} target="_blank" href={fbProfile.link}>
      <span>
        <FontAwesome name="facebook fa-1-5x" />
      </span>
    </a>
  ) : null;

  const igStyle = {
    padding: '0 10px'
  };
  const igConnection = igProfile ? (
    <span>
      <a
        style={igStyle}
        target="_blank"
        href={`https://instagram.com/${igProfile.username}`}
      >
        <FontAwesome name="instagram fa-1-5x" />
      </a>
    </span>
  ) : null;

  const socialButtons = (
    <div className="social-buttons">
      {fbConnection}
      {igConnection}
      <Upvote numUpvotes={haiku.upvotes || 0} sendUpvote={sendUpvote} />
    </div>
  );

  return (
    <ListItem>
      {haiku.lines.map((line, idx) => (
        <HaikuLine line={line.content} key={idx} />
      ))}
      <span>- {haiku.author || 'anonymous'}</span>
      {socialButtons}
    </ListItem>
  );
};

HaikuListItem.propTypes = {
  haiku: PropTypes.object.isRequired,
  sendUpvote: PropTypes.func
};

export default HaikuListItem;
