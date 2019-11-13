import React from 'react';
import NxrToogleButton from '../../UI/NxrToogleButton/NxrToogleButton';

import classes from './MovieResultHeader.scss';


export default function MovieResultHeader(props) {
  return (
    <div className="MovieResultHeader">
      <div className="MovieResultHeader_LeftInfoPanel">
        {props.needTotal && <span>7 movies found</span>}
        {!props.needTotal && <span>Films by drama genre</span>}
      </div>
      <div className="MovieResultHeader_RightInfoPanel">
        {props.needSortToogle &&
          <NxrToogleButton title="Sort by" firstTitle="released date" secondTitle="raiting" />
        }
      </div>
    </div>
  )
}
