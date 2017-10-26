import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Navigation.css';
import './Flex.css';

const mapStateToProps = state => state.router.location;

const Navigation = ({
  pathname
}) => {
  return (
    <div className='flex-container flex-row'>
      <Link to="/">
        <button type="button">
          Create
        </button>
      </Link>
      <Link to="/about">
        <button type="button">
          About
        </button>
      </Link>
      <Link to="/browse-haikus">
        <button type="button">
          Browse
        </button>
      </Link>
    </div>
  );
}

export default connect(mapStateToProps, null)(Navigation);
