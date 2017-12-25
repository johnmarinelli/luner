import React from 'react';
import FacebookProvider, { ShareButton, Login } from 'react-facebook';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';

import fb from './reducers.js';
import { fbLoggedIn, fbLoggedOut } from './actions';

import './styles.css';

const mapStateToProps = state => state.rootReducer.fb;

const mapDispatchToProps = {
  fbLoggedIn,
  fbLoggedOut
};

/*
 * comes with builtin logout functionality
 */
class FacebookLoginButton extends React.Component {
  constructor() {
    super();
    this.state = { hover: false };
  }

  handleResponse = res => {
    const { loggedIn, fbLoggedIn, fbLoggedOut } = this.props;
    if (loggedIn) {
      window.FB.logout();
      fbLoggedOut();
    } else {
      fbLoggedIn(res);
    }
  };

  handleError = err => {
    if (err.message === 'Token is undefined') {
    }
    console.error(err);
    /*
     * todo: create slice of state for error
     * this.setState({err})
     */
  };

  render() {
    const { loggedIn } = this.props;
    const text = loggedIn ? 'Logout' : 'Connect with Facebook';
    const fbView = (
      <span>
        <FontAwesome name="facebook" /> {text}
      </span>
    );

    const disclaimerStyle = { display: 'inline-block', fontSize: '0.75em' };
    disclaimerStyle.visibility =
      !loggedIn && this.state.hover ? 'visible' : 'hidden';

    return (
      <FacebookProvider appId="372220496538727">
        <Login
          scope="public_profile"
          onResponse={this.handleResponse}
          onError={this.handleError}
          render={({ isLoading, isWorking, onClick }) => (
            <div>
              <a
                style={{ float: 'right' }}
                onMouseEnter={_ => this.setState({ hover: true })}
                onMouseLeave={_ => this.setState({ hover: false })}
                onClick={onClick}
                className="FacebookLoginButton"
              >
                {isLoading || isWorking ? 'Please Wait...' : fbView}
              </a>
              <div style={disclaimerStyle}>
                Logging in will let others see your Facebook attached to your
                haiku. Please only log in if you want to share publicly!
              </div>
            </div>
          )}
        />
      </FacebookProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  FacebookLoginButton
);
