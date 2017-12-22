import React from 'react';
import FacebookProvider, { ShareButton, Login } from 'react-facebook';
import FontAwesome from 'react-fontawesome';

import './styles.css';

class FacebookLoginButton extends React.Component {
  constructor() {
    super();
  }

  handleResponse = res => {
    console.log(res);
    this.text = '';
  };

  handleError = err => {
    /*
     * todo: create slice of state for error
     * this.setState({err})
     */
  };

  render() {
    return (
      <FacebookProvider appId="372220496538727">
        <Login
          scope="public_profile"
          onResponse={this.handleResponse}
          onError={this.handleError}
          render={({ isLoading, isWorking, onClick }) => (
            <a onClick={onClick} className="FacebookLoginButton">
              {isLoading || isWorking ? '...' : <FontAwesome name="facebook" />}
            </a>
          )}
        />
      </FacebookProvider>
    );
  }
}

export default FacebookLoginButton;
