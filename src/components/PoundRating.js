import React from 'react';
import PropTypes from 'prop-types';

import disable from '../assets/img/disable.png';
import active from '../assets/img/active.png';

export default function PoundRating({ rate }) {
  const calc = 5 - rate;
  const elements = [];

  for (let i = 0; i < rate; i++) {
    elements.push(<img src={active} alt={'active'} key={i} />);
  }
  for (let i = 0; i < calc; i++) {
    elements.push(<img src={disable} alt={'disable'} key={i} />);
  }

  return <div className="rating">{elements}</div>;
}

PoundRating.propTypes = {
  rate: PropTypes.number.isRequired
};
