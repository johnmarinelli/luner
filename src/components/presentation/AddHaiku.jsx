import React from 'react';
import { connect } from 'react-redux';
import { addHaiku } from '../../action-creators';

const mapStateToProps = state => ({
  haiku: state.haikuApp.haiku,
  addHaiku
});

let AddHaiku = ({
  haiku,
  addHaiku,
  dispatch
}) => {
  const dispatchAddHaiku = (haiku) => {
    /*
     * refactor this 
     */
    const expectedSyllableCounts = [5,3,5];
    const actualSyllableCounts = haiku.lines.map(line => line.syllables);
    const compareArrays = (a, b) => 
      a.length === b.length &&
        a.every((v, i) => v === b[i]);

    if (compareArrays(actualSyllableCounts, expectedSyllableCounts)) {
      dispatch(addHaiku(haiku));
    }
  };

  return (
    <div>
      <button
        onClick={dispatchAddHaiku.bind(null, haiku)}>
        Send
      </button>
    </div>
  );
};

export default connect(
  mapStateToProps,
  null
)(AddHaiku);
