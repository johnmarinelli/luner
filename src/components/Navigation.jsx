import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddHaiku from './presentation/AddHaiku';

import './Navigation.css';
import './Flex.css';

const mapStateToProps = state => state.router.location;

const Navigation = ({
  pathname
}) => {
  let leftmostNavItem = <Link to="/">
    <button type="button">
      Create
    </button>
  </Link>;

  if ('/' === pathname) {
    leftmostNavItem = <AddHaiku />;
  }

  return (
    <div className='flex-container flex-row'>
      {leftmostNavItem}
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
