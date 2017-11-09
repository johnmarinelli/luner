import React from 'react';
import { connect } from 'react-redux';
import { addHaiku } from './actions.js';

import { validateSyllables } from './services.js';

const mapStateToProps = state => ({
  haiku: state.rootReducer.createHaiku,
  addHaiku
});

let AddHaiku = ({
  haiku,
  addHaiku,
  dispatch,
  validateInputs,
  clearInputs
}) => {
  const dispatchAddHaiku = (haiku) => {
    const expectedCounts = [5,3,5];
    let ret = null;

    if (validateInputs() && validateSyllables(haiku.lines, expectedCounts)) {
      dispatch(addHaiku(haiku))
        .then(() => {
          alert('Haiku posted.  Check out the Browse page to see it!');
          ret = clearInputs();
        })
        .catch(reason => alert(`Haiku failed to post: ${reason}`));
    }
    else {
      alert('Haiku failed to send.  Please check for typos, and make sure each line has 5, 3, and 5 syllables respectively.');
    }

    return ret;
  };

  return (
    <button 
      onClick={dispatchAddHaiku.bind(null, haiku)}>
      Send
    </button>
  );
};

export default connect(
  mapStateToProps,
  null
)(AddHaiku);
