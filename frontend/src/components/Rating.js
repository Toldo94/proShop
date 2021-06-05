import React from 'react';

import Star from './Star';

function getStarStringValues(value) {
  const fullStars = Math.floor(value);
  const halfStar = value - fullStars >= 0.5 ? true : false;
  const emptyStars = 5 - Math.ceil(value);
  const starValues = Array.from({ length: fullStars }, (i) => 'full');
  if (halfStar) starValues.push('half');
  return starValues.concat(Array.from({ length: emptyStars }, (i) => 'empty'));
}

function getStars(value, color) {
  return getStarStringValues(value).map((value, index) => (
    <Star key={index} value={value} color={color} />
  ));
}

const Rating = ({ value, text, color }) => {
  return (
    <div className='rating'>
      <span>{getStars(value, color)}</span>
      <span>{text && text}</span>
    </div>
  );
};

export default Rating;
