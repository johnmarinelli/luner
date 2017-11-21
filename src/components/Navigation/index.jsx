import React from 'react';
import { NavLink } from './components';

const Navigation = () => {
  return (
    <div className="navigation flex-container">
      <NavLink exact to="/">
        Create
      </NavLink>
      <NavLink exact to="/about">
        About
      </NavLink>
      <NavLink exact to="/browse-haikus">
        Browse
      </NavLink>
    </div>
  );
}
export default Navigation;
