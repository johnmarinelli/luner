import React from 'react';
import PropTypes from 'prop-types';
import Upvote from '../Upvote';
import HaikuLine from '../HaikuLine';

const FeaturedHaiku = ({ haiku, sendUpvote }) => (
  <div>
    {haiku.lines.map((line, idx) => (
      <HaikuLine line={line.content} key={idx} />
    ))}
    <span>- {haiku.author || 'anonymous'}</span>
    <Upvote numUpvotes={haiku.upvotes || 0} sendUpvote={sendUpvote} />
  </div>
);

FeaturedHaiku.propTypes = {
  haiku: PropTypes.object.isRequired,
  sendUpvote: PropTypes.func
};

export default FeaturedHaiku;
