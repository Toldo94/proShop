import React from 'react';

const starStyle = {
  full: 'fas fa-star',
  half: 'fas fa-star-half-alt',
  empty: 'far fa-star',
};

const Star = ({ value, color }) => {
  return <i style={{ color }} className={starStyle[value]}></i>;
};

export default Star;
