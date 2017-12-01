import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { 
  haikusIncrementPage, 
  haikusPaginatedSuccess, 
  haikusLastPageReached, 
  haikusFirebaseChildAdded,
  haikusFirebaseChildUpdated,
  haikusFirebaseChildRemoved,
  upvoteHaiku 
} from './actions.js';
import { getVisibleHaikus } from './reducers.js';
import { getCurrentPage, getLastPageReached } from './services/pagination/reducers.js'; 
import { getUpvotesRemaining } from './services/upvotes/reducers.js'; 
import { paginator } from '../../services/firebase.js';
import { rankHaikus } from './services/utils.js';
import { InlineLink, Button, Loader } from '../../components';
import { HaikuListItem } from './components';
import Haikus from './Haikus';
import { attachFirebaseListener, detachFirebaseListener } from '../../services/firebase';

import './styles.css';

const mapStateToProps = (state, { match }) => {
  const filter = match.params.filter || 'all';

  return {
    haikus: getVisibleHaikus(state, filter),
    page: getCurrentPage(state),
    isLastPageReached: getLastPageReached(state),
    upvotesRemaining: getUpvotesRemaining(state),
    filter
  };
};

const mapDispatchToProps = {
  haikusIncrementPage,
  haikusPaginatedSuccess,
  haikusLastPageReached,
  haikusFirebaseChildAdded,
  haikusFirebaseChildUpdated,
  haikusFirebaseChildRemoved,
  upvoteHaiku
};

class ConnectedHaikus extends React.Component {

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
    const { 
      haikusPaginatedSuccess, 
      haikusLastPageReached, 
      haikusFirebaseChildAdded,
      haikusFirebaseChildUpdated,
      haikusFirebaseChildRemoved,
      filter 
    } = this.props;

    attachFirebaseListener('child_added', ss => haikusFirebaseChildAdded(ss.val()));
    attachFirebaseListener('child_changed', ss => haikusFirebaseChildUpdated(ss.val()));
    attachFirebaseListener('child_removed', ss => haikusFirebaseChildRemoved(ss.val().id));

    if (!paginator.initialized) {
      paginator.reset();
      paginator.on('value', () => {
        return haikusPaginatedSuccess(paginator.collection, filter)
      }
      );
      paginator.on('isLastPage', () =>
        haikusLastPageReached(true)
      );
      paginator.initialized = true;
      this.fetchHaikus();
    }
  }

  sendUpvote (haiku) {
    const { upvotesRemaining, upvoteHaiku } = this.props;

    upvotesRemaining > 0 ? 
      upvoteHaiku(haiku) : 
      alert('You have used all your upvotes for today.');
  }

  render () {
    const { 
      haikus, 
      isLastPageReached
    } = this.props;

    const renderedHaikus = haikus.sort(rankHaikus).map(haiku => 
      <HaikuListItem 
        key={haiku.id} 
        sendUpvote={this.sendUpvote.bind(this, haiku)}
        haiku={haiku} />
    );
    const loadingAnimation = (renderedHaikus.length < 1) ? <Loader /> : '';

    const showMoreProps = {
      ref: (btn) => this.showMore = btn,
      onClick: this.fetchHaikus
    };

    showMoreProps.disabled = isLastPageReached;

    const showMore = isLastPageReached ? 
      <div style={{'letterSpacing': '0.1em', 'marginBottom': '10px'}}>
        Showing all haikus.  <InlineLink href="/">Make some more.</InlineLink>
      </div> :
      <Button
        {...showMoreProps}>
        Show More
      </Button>;

    const haikusProps = { 
      renderedHaikus, 
      loadingAnimation, 
      showMore 
    };

    return <Haikus {...haikusProps} />;
  }

  componentWillUnmount () {
    if (paginator.initialized) {
      paginator.off('value');
      paginator.off('isLastPage');
      paginator.initialized = false;
    }
    detachFirebaseListener('child_added');
    detachFirebaseListener('child_changed');
    detachFirebaseListener('child_removed');
  }
};

Haikus.propTypes = {
  haikus: PropTypes.array,
  errorMessage: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedHaikus);
