import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import { addHaiku } from './actions.js';

import { validateSyllables } from './services.js';

import { Button } from './../../../../components';

const mapStateToProps = state => ({
  haiku: state.rootReducer.createHaiku,
});

const mapDispatchToProps = (dispatch) => ({
  addHaiku: (haiku) => dispatch(addHaiku(haiku))
});

let AddHaiku = ({
  haiku,
  addHaiku,
  clearInputs
}) => {
  const dispatchAddHaiku = (haiku) => {
    const expectedCounts = [5,3,5];

    if (validateSyllables(haiku.lines, expectedCounts)) {
      addHaiku(haiku)
        .then(() => {
          alert('Haiku posted.  Check out the Browse page to see it!');
          clearInputs();
        })
        .catch(reason => alert(`Haiku failed to post: ${reason}`));
    }
    else {
      alert('Haiku failed to send.  Please make sure each line has 5, 3, and 5 syllables respectively.');
    }
  };

  return (
    <Button
      onClick={dispatchAddHaiku.bind(null, haiku)}>
      send <FontAwesome name='paper-plane' />
    </Button>
  );
};

AddHaiku.propTypes = {
  haiku: PropTypes.object.isRequired,
  addHaiku: PropTypes.func,
  clearInputs: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddHaiku);
