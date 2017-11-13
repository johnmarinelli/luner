import React from 'react';

const ListItem = ({
  children
}) => 
  <li>
    <div className="flex-item">
      {children}
    </div>
  </li>

export default ListItem;
