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
    const { lines } = haiku;
    const expectedCount = [5,3,5];

    let text = 'You are not done yet';

    if (validateSyllables(lines, expectedCount)) {
      text = 'You are done!';
    }

    else {
      const syllables = lines.map(line => line.syllables);
      const firstState = { counts: [0, 0, 0], text: 'A Lune is a 5-3-5 haiku.' },
        secondState = { counts: [5, 0, 0], text: 'Good job!  You\'re almost there.' },
        thirdState = { counts: [5, 3, 0], text: 'One more line to go.' };

      text = [firstState, secondState, thirdState].reduce((acc, state) => {
        if (compareArrays(state.counts, syllables)) return state.text;  
        else return acc;
      }, firstState.text);
    }

    feedback = <div className='feedback'>
      {text} 
    </div>
  }

  return feedback;
}

export default connect(mapStateToProps, null)(Feedback);
