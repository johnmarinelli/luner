import React from 'react';
import { connect } from 'react-redux';
import { getVisibleHaikus, getErrorMessage } from '../../reducers';
import Loader from './Loader';

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all';

  return {
    haikus: getVisibleHaikus(state, filter),
    errorMessage: getErrorMessage(state, filter),
    filter
  };
};

const ShowHaikus = ({
  haikus, 
  errorMessage,
  filter
}) => {
  const renderedHaikus = haikus.map(haiku => 
    <div key={haiku.id}>
      {haiku.lines.reduce((acc, line) => {
        return acc + line.content + "\n";
      }, '')}
    </div>
  );

  const loadingAnimation = (renderedHaikus.length < 1)? <Loader /> : '';

  return (
    <div>
      {renderedHaikus}
      {loadingAnimation}
    </div>
  );
}

export default connect(mapStateToProps, null)(ShowHaikus);
