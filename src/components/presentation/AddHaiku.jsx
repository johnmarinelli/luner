import React from 'react';
import { connect } from 'react-redux';
import { addHaiku } from '../../action-creators';

const mapStateToProps = state => ({
  haiku: state.haiku,
  addHaiku
});

let AddHaiku = ({
  haiku,
  addHaiku,
  dispatch
}) => {
  const content = haiku.lines.join('');
  const dispatchAddHaiku = () => {
    dispatch(addHaiku(content));
  };

  return (
    <div>
      <button 
        onClick={dispatchAddHaiku}>
        Send
      </button>
    </div>
  );
};

export default connect(
  mapStateToProps,
  null
)(AddHaiku);
