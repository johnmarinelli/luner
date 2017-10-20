import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddHaiku from './presentation/AddHaiku';

import './Navigation.css';

const mapStateToProps = (state) => state.router.location;

const Navigation = ({
  pathname
}) => {
  let leftmostNavItem = <button><Link to="/">Create</Link></button>;

  if ('/' === pathname) {
    leftmostNavItem = <AddHaiku />;
  }

  return (
    <div className="flex-container">
      <ul>
        <li>{leftmostNavItem}</li>
        <li>
          <button>
            <Link to="/about">About</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="/browse-haikus">Browse</Link>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default connect(mapStateToProps, null)(Navigation);
