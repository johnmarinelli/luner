import React from 'react';
import { connect } from 'react-redux';
import { getVisibleHaikus, getErrorMessage } from '../../reducers';
import Loader from './Loader';

import './ShowHaikus.css';

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all';

  return {
    haikus: getVisibleHaikus(state, filter),
    errorMessage: getErrorMessage(state, filter),
    filter
  };
};

const HaikuLine = ({
  line
}) => 
  <div className="displayed-haiku-line">
    {line}
  </div>;


const Haiku = ({
  haiku
}) => 
  <div className="flex-item">
    {haiku.lines.map((line, idx) => <HaikuLine line={line.content} key={idx} />)}
    <span>- {haiku.author || 'anonymous'}</span>
  </div>

const ShowHaikus = ({
  haikus, 
  errorMessage,
  filter
}) => {
  const renderedHaikus = haikus.map(haiku => <Haiku haiku={haiku} key={haiku.id} />);
  const loadingAnimation = (renderedHaikus.length < 1)? <Loader /> : '';

  return (
    <div className="haikus">
      {renderedHaikus}
      {loadingAnimation}
    </div>
  );
}

export default connect(mapStateToProps, null)(ShowHaikus);
