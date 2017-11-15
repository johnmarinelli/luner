import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Navigation = () => {
  return (
    <div className="navigation flex-container">
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
export default Navigation;
