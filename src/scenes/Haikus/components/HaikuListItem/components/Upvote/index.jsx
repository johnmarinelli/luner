import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Upvote = ({
  numUpvotes,
  sendUpvote
}) => 
  <button 
    className="upvotes" 
    onClick={sendUpvote}>
    <img 
      src="/thumbs_up.svg" 
      alt="upvotes" />
    <span 
      className="upvotes">
      {numUpvotes} 
    </span>
  </button>

Upvote.propTypes = {
  numUpvotes: PropTypes.number.isRequired,
  sendUpvote: PropTypes.func
};

export default Upvote;
