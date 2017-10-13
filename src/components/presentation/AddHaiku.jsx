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
  const dispatchAddHaiku = (haiku) => 
    dispatch(addHaiku(haiku));

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
