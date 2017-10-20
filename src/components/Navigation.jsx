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
  let leftmostNavItem = <button>
    <Link to="/">
      Create
    </Link>
  </button>;

  if ('/' === pathname) {
    leftmostNavItem = <AddHaiku />;
  }

  return (
    <div className='flex-container flex-row'>
      {leftmostNavItem}
      <button>
        <Link to='/about'>About</Link>
      </button>
      <button>
        <Link to='/browse-haikus'>Browse</Link>
      </button>
    </div>
  );
}

export default connect(mapStateToProps, null)(Navigation);
