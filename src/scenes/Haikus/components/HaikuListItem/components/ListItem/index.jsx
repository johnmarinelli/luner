import React from 'react';

import './styles.css';

const ListItem = ({
  children
}) => 
  <li>
    <div className="flex-item">
      {children}
    </div>
  </li>

export default ListItem;
