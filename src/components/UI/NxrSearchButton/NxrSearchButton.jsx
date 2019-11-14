import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import classes from './NxrSearchButton.scss';

export default function NxrSearchButton() {
  return (
    <a href="#" className="NxrSearchButton">
      <FontAwesomeIcon icon={faSearch} className="fa-lg fa-rotate-90" />
    </a>
  )
}
