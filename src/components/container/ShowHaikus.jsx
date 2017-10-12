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

class ShowHaikus extends React.Component {
  fetchData () {
    const { filter, fetchHaikus } = this.props;

    /*
     * fetch haikus is an async action creator 
     * that returns a thunk
     */
    fetchHaikus(filter);
  }

  constructor () {
    super();
  }

  componentDidMount () {
    this.fetchData();
  }

  componentDidUpdate (prevProps) {
    if (prevProps.filter !== this.props.filter) {
      this.fetchData();
    }
  }

  render () {
    return (
      <div>
        {this.props.filter}
      </div>
    );
  }
}

export default connect(mapStateToProps, actions)(ShowHaikus);
