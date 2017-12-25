import React from 'react';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';

import ig from './reducers.js';
import { igLoggedIn, igLoggedOut } from './actions';
import { parseFragmentString } from '../../../services/utils.js';

import './styles.css';

const mapStateToProps = state => ({
  ig: state.rootReducer.ig,
  accessToken: state.router.location.hash
    ? state.router.location.hash.split('#access_token=')[1]
    : null
});

const mapDispatchToProps = {
  igLoggedIn,
  igLoggedOut
};

class InstagramLoginButton extends React.Component {
  constructor() {
    super();
    this.getInstagramToken = this.getInstagramToken.bind(this);
    this.state = { hover: false };
    this.clientId = 'edfd88ceab3f4b74865a25f6fd0b36f7';
    this.scope = 'basic';
  }

  componentDidMount() {
    const { accessToken } = this.props;

    this.setState({ hover: false });

    if (accessToken) {
      this.getUserProfile(accessToken);
    }
  }

  getUserProfile = accessToken => {
    const { igLoggedIn, ig: { loggedIn } } = this.props;

    if (!loggedIn) {
      const url = `https://api.instagram.com/v1/users/self/?access_token=${accessToken}`;
      return fetch(url)
        .then(res => {
          if (res.status < 400) {
            return res.json();
          } else {
            alert('Error retrieving Instagram profile.');
            return res;
          }
        })
        .then(res => {
          return res.data;
        })
        .then(profile => {
          igLoggedIn(profile);
        })
        .catch(err => {
          alert(err);
          return err;
        });
    }
  };

  authenticateInstagram = url =>
    fetch(url)
      .then(res => {
        if (res.status < 400) {
          window.location.href = res.url;
        } else {
          /*
           * TODO: send error action
           */
          alert('Error authenticating Instagram.');
          console.error(res);
        }
      })
      .catch(err => {
        /*
        * TODO: send error action
        */
        alert('Network error.');
      });

  async getInstagramToken() {
    const { clientId, scope } = this;

    const redirectUri =
      this.redirectUri || window.location.origin + window.location.pathname;
    const url = `https://api.instagram.com/oauth/authorize/?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=token`;

    await this.authenticateInstagram(url);
  }

  logout = () => {
    const { igLoggedOut } = this.props;
    igLoggedOut();
  };

  render() {
    const { loggedIn } = this.props.ig;

    const disclaimerStyle = { display: 'inline-block', fontSize: '0.75em' };
    disclaimerStyle.visibility =
      !loggedIn && this.state.hover ? 'visible' : 'hidden';

    const onClick = loggedIn ? this.logout : this.getInstagramToken;
    const text = loggedIn ? 'Logout' : 'Connect with Instagram';

    return (
      <div>
        <a
          style={{ float: 'right' }}
          className="InstagramLoginButton"
          onMouseEnter={_ => this.setState({ hover: true })}
          onMouseLeave={_ => this.setState({ hover: false })}
          onClick={onClick}
        >
          <FontAwesome name="instagram" /> {text}
        </a>
        <div style={disclaimerStyle}>
          Logging in will let others see your Instagram attached to your haiku.
          Please only log in if you want to share publicly!
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  InstagramLoginButton
);
