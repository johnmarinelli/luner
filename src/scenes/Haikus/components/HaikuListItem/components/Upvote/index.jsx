import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../../../../../components';
import FontAwesome from 'react-fontawesome';

import './styles.css';

const Upvote = ({
  numUpvotes,
  sendUpvote
}) => 
  <Button
    className="upvotes" 
    onClick={sendUpvote}>
    <FontAwesome name='thumbs-up' />
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
