import React from 'react';
import { connect } from 'react-redux';
import { validateSyllables } from '../utilities';

const mapStateToProps = state => ({
  haiku: state.haikuApp.haiku
});

const Feedback = ({
  haiku
}) => {
  const { lines } = haiku;
  const expectedCount = [5,3,5];

  let feedback = 'You are not done yet';

  if (validateSyllables(lines, expectedCount)) {
    feedback = 'You are done!';
  }

  return (
    <div className='feedback'>
      {feedback} 
    </div>
  );
}

export default connect(mapStateToProps, null)(Feedback);
