import React from 'react';
import ToogleButtonContainer from '../../../containers/ToogleButtonContainer/ToogleButtonContainer';

import './MovieResultHeader.scss';


export default function MovieResultHeader(props) {
  return (
    <div className="MovieResultHeader">
      <div className="MovieResultHeader_LeftInfoPanel">
        {props.needTotal && <span>{props.count} movies found</span>}
        {!props.needTotal && <span>Films by drama genre</span>}
      </div>
      <div className="MovieResultHeader_RightInfoPanel">
        {props.needSortToogle &&
          <ToogleButtonContainer title="Sort by" firstTitle="released date" secondTitle="raiting" />
        }
      </div>
    </div>
  )
}
