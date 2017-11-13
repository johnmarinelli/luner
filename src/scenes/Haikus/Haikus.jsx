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
    {loadingAnimation}
    <div className="show-more-wrapper">
      {showMore}
    </div>
  </div>;

export default Haikus;
