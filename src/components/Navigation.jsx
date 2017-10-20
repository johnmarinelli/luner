import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddHaiku from './presentation/AddHaiku';

import './Navigation.css';

const mapStateToProps = (state) => state.router.location;

const Navigation = ({
  pathname
}) => {
  let leftmostNavItem = <Link to="/">Create</Link>;

  if ('/' === pathname) {
    leftmostNavItem = <AddHaiku />;
  }

  return (
    <div className="flex-container">
      <ul>
        <li>{leftmostNavItem}</li>
        <li>
          <Link className="button" to="/about">About</Link>
        </li>
        <li>
          <Link className="button" to="/browse-haikus">Browse</Link>
        </li>
      </ul>
    </div>
  );
}

export default connect(mapStateToProps, null)(Navigation);
