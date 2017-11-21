import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../../../../../components';

import './styles.css';

const Upvote = ({
  numUpvotes,
  sendUpvote
}) => 
  <Button
    className="upvotes" 
    onClick={sendUpvote}>
    <img 
      src="/thumbs_up.svg" 
      alt="upvotes" />
    <span 
      className="upvotes">
      {numUpvotes} 
    </span>
  </Button>

Upvote.propTypes = {
  numUpvotes: PropTypes.number.isRequired,
  sendUpvote: PropTypes.func
};

export default Upvote;
