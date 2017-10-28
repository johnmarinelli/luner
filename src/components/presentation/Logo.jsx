import React from 'react';

const Logo = ({
  width,
}) => 
  <img 
    className="logo" 
    src="/logo.png" 
    width={width} />;


Logo.defaultProps = {
  width: '100px'
}

export default Logo;
