import React from 'react';

const Haikus = ({
  renderedHaikus,
  loadingAnimation,
  showMore
}) => 
  <div className="haikus">
    <ul> 
      {renderedHaikus}
    </ul>
    {showMore} 
    {loadingAnimation}
  </div>;

export default Haikus;
