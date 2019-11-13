import React from 'react';
import NxrButton from '../../UI/NxrButton/NxrButton';
import NxrToogleButton from '../../UI/NxrToogleButton/NxrToogleButton';

import classes from './MovieSearchControls.scss';


export default function MovieSearchControls() {
  return (
    <div className="MovSearchControl">
      <div>
        <p className="MovSearchControl_SearchTitle">Find your movie</p>
        <input className="MovSearchControl_Input" type="text" />
        <NxrButton>Search</NxrButton>
      </div>
      <div className="MovSearchControl_SearchMode">
        <span className="MovSearchControl_ModeTitle">Search by</span>
        <NxrToogleButton firstTitle="title" secondTitle="gengre" />
      </div>
    </div>
  )
}
