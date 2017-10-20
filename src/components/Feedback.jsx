import React from 'react';
import { connect } from 'react-redux';
import { validateSyllables } from '../utilities';

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
    const { lines } = haiku;
    const expectedCount = [5,3,5];

    let text = 'You are not done yet';

    if (validateSyllables(lines, expectedCount)) {
      text = 'You are done!';
    }

    feedback = <div className='feedback'>
      {text} 
    </div>
  }

  return feedback;
}

export default connect(mapStateToProps, null)(Feedback);
