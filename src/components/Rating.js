import React from 'react';
import PropTypes from 'prop-types';

import disable from '../assets/img/disable.png';
import active from '../assets/img/active.png';

export default function Rating({ rating }) {
  const elements = [];

  for (let i = 0; i < rating; i++) {
    elements.push(<img src={active} alt={'active'} key={i} />);
  }
  for (let i = 0; i < 5 - rating; i++) {
    elements.push(<img src={disable} alt={'disable'} key={i + 5} />);
  }

  return <div className="rating">{elements}</div>;
}

Rating.propTypes = {
  rating: PropTypes.string.isRequired
};
