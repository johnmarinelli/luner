import React from 'react';
import { connect } from 'react-redux';
import { getVisibleHaikus, getIsFetching, getErrorMessage } from '../../reducers';
import * as actions from '../../action-creators';

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all';

  return {
    haikus: getVisibleHaikus(state, filter),
    errorMessage: getErrorMessage(state, filter),
    isFetching: getIsFetching(state, filter),
    filter
  };
};

const mapDispatchToProps = (dispatch, { match }) => {
  const filter = match.params.filter || 'all';

  actions.watchHaikuAddedEvent(dispatch);

  return {
    fetchHaikus: () => dispatch(actions.fetchHaikus(filter))
  }
};

class ShowHaikus extends React.Component {
  fetchData () {
    const { filter, fetchHaikus } = this.props;

    /*
     * fetch haikus is an async action creator 
     * that returns a thunk
     */
    fetchHaikus(filter);
  }

  componentDidMount () {
    this.fetchData();
  }

  componentDidUpdate (prevProps) {
    if (prevProps.filter !== this.props.filter ||
        prevProps.haikus.length !== this.props.haikus.length) {
      this.fetchData();
    }
  }

  render () {
    const { haikus } = this.props;

    const renderedHaikus = haikus.map(haiku => 
      <div key={haiku.id}>
      {haiku.lines.reduce((acc, line) => {
        return acc + line.content + "\n";
      }, '')}
      </div>
    );

    return (
      <div>
        {renderedHaikus}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowHaikus);
