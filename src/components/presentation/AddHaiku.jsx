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
  const content = haiku.lines.map(line => line.content).join("\n");
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
