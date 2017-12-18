import React from 'react';

const Haikus = ({
  renderedHaikus,
  renderedFeaturedHaiku,
  loadingAnimation,
  showMore
}) =>
  <div className="haikus">
    {renderedFeaturedHaiku}
    <ul>
      {renderedHaikus}
    </ul>
    {showMore}
    {loadingAnimation}
  </div>;

export default Haikus;
