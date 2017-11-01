import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { haikusIncrementPage, haikusPaginatedSuccess } from '../../action-creators';
import { getCurrentPage, getVisibleHaikus, getErrorMessage } from '../../reducers';
import { paginator } from '../../firebase.js';
import Loader from './Loader';
import HaikuListItem from './HaikuListItem';

import './ShowHaikus.css';

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all';

  return {
    haikus: getVisibleHaikus(state, filter),
    page: getCurrentPage(state),
    errorMessage: getErrorMessage(state, filter),
    filter
  };
};

const mapDispatchToProps = {
  haikusIncrementPage,
  haikusPaginatedSuccess
};

class ShowHaikus extends React.Component {

  constructor () {
    super();
    this.fetchHaikus = this.fetchHaikus.bind(this);
  }

  fetchHaikus () {
    const { page, haikusIncrementPage } = this.props;
    paginator.goToPage(page + 1);
    haikusIncrementPage();
  }

  componentDidMount () {
    const { haikusPaginatedSuccess, filter } = this.props;
    paginator.on('value', () => 
      haikusPaginatedSuccess(paginator.collection, filter)
    );
    paginator.on('isLastPage', () =>
      this.showMore.disabled = true
    );
  }

  render () {
    const { haikus, errorMessage, filter } = this.props;
    const renderedHaikus = haikus.map(haiku => 
      <li key={haiku.id}>
        <HaikuListItem 
          haiku={haiku} />
      </li>
    );
    const loadingAnimation = (renderedHaikus.length < 1)? <Loader /> : '';

    return (
      <div className="haikus">
        <ul> 
          {renderedHaikus}
        </ul>
        {loadingAnimation}
        <button ref={btn => this.showMore = btn} onClick={this.fetchHaikus}>Show More</button>
      </div>
    );
  }
};

ShowHaikus.propTypes = {
  haikus: PropTypes.array,
  errorMessage: PropTypes.string,
  filter: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowHaikus);
