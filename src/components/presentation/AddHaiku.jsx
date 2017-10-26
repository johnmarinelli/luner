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

    if (validateSyllables(haiku.lines, expectedCounts)) {
      dispatch(addHaiku(haiku)).then(() => 
        clearInputs()
      );
    }
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
