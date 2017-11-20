import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../';

const Navigation = () => {
  return (
    <div className="navigation flex-container">
      <Link to="/">
        <Button>
          Create
        </Button>
      </Link>
      <Link to="/about">
        <Button>
          About
        </Button>
      </Link>
      <Link to="/browse-haikus">
        <Button>
          Browse
        </Button>
      </Link>
    </div>
  );
}
export default Navigation;
