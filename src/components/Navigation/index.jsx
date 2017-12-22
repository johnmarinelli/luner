import React from 'react';
import { NavLink } from './components';
import FontAwesome from 'react-fontawesome';

const Navigation = () => {
  return (
    <div className="navigation flex-container">
      <NavLink exact to="/">
        write <FontAwesome name="pencil" />
      </NavLink>
      <NavLink exact to="/about">
        why <FontAwesome name="info-circle" />
      </NavLink>
      <NavLink exact to="/browse-haikus">
        browse <FontAwesome name="eye" />
      </NavLink>
    </div>
  );
};
export default Navigation;
