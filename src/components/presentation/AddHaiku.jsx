import React from 'react';
import { connect } from 'react-redux';
import { addHaiku } from '../../action-creators';

import { validateSyllables } from '../../utilities';

const mapStateToProps = state => ({
  haiku: state.haikuApp.haiku,
  addHaiku
});

let AddHaiku = ({
  haiku,
  addHaiku,
  dispatch,
  clearInputs
}) => {
  const dispatchAddHaiku = (haiku) => {
    const expectedCounts = [5,3,5];
    let ret = null;

    if (validateSyllables(haiku.lines, expectedCounts)) {
      dispatch(addHaiku(haiku))
        .then(() => {
          alert('Haiku posted.  Check out the Browse page to see it!');
          ret = clearInputs();
        })
        .catch(reason => alert(`Haiku failed to post: ${reason}`));
    }
    else {
      alert('Haiku fails the 5-3-5 syllablic structure.');
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
