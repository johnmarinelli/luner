import React from 'react';
import { connect } from 'react-redux';
import { compareArrays, validateSyllables } from '../utilities';

import './Feedback.css';

const mapStateToProps = state => ({
  haiku: state.haikuApp.haiku,
  pathname: state.router.location.pathname
});

const Feedback = ({
  haiku,
  pathname
}) => {
  let feedback = null;

  if ('/' === pathname) {
    feedback = <div className='feedback'>
      The American Haiku has a 5-3-5 syllabic structure.  Go ahead, write your own below!
    </div>
  }

  return feedback;
}

export default connect(mapStateToProps, null)(Feedback);
