import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';

const Header = () => (
  <div className="intro">
    <NavLink to="/" activeClassName="">
      thehaiku.club
    </NavLink>
  </div>
);

export default Header;
