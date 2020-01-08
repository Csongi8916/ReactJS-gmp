import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './NxrSearchButton.scss';

export default function NxrSearchButton() {
  return (
    <Link className="NxrSearchButton"
      to={{
        pathname: `/`,
      }}>
      <FontAwesomeIcon icon={faSearch} className="fa-lg fa-rotate-90" />
    </Link>
  )
}
