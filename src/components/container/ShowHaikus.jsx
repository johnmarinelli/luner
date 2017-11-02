import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { haikusIncrementPage, haikusPaginatedSuccess, haikusLastPageReached } from '../../action-creators';
import { getCurrentPage, getVisibleHaikus, getErrorMessage, getLastPageReached } from '../../reducers';
import { paginator } from '../../firebase.js';
import Loader from '../presentation/Loader';
import HaikuListItem from '../presentation/HaikuListItem';

import './ShowHaikus.css';

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all';

  return {
    haikus: getVisibleHaikus(state, filter),
    page: getCurrentPage(state),
    errorMessage: getErrorMessage(state, filter),
    isLastPageReached: getLastPageReached(state),
    filter
  };
};

const mapDispatchToProps = {
  haikusIncrementPage,
  haikusPaginatedSuccess,
  haikusLastPageReached
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
    const { haikusPaginatedSuccess, haikusLastPageReached, filter } = this.props;
    paginator.on('value', () => 
      haikusPaginatedSuccess(paginator.collection, filter)
    );
    paginator.on('isLastPage', () =>
      haikusLastPageReached(true)
    );
  }

  render () {
    const { haikus, errorMessage, filter, isLastPageReached } = this.props;
    const renderedHaikus = haikus.map(haiku => 
      <li key={haiku.id}>
        <HaikuListItem 
          haiku={haiku} />
      </li>
    );
    const loadingAnimation = (renderedHaikus.length < 1)? <Loader /> : '';

    const showMoreProps = {
      ref: (btn) => this.showMore = btn,
      onClick: this.fetchHaikus
    };
    isLastPageReached ? showMoreProps.disabled = true : {};
    const showMore = 
      <button 
        {...showMoreProps}>
        Show More
      </button>;

    return (
      <div className="haikus">
        <ul> 
          {renderedHaikus}
        </ul>
        {loadingAnimation}
        <div className="show-more-wrapper">
          {showMore}
        </div>
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
