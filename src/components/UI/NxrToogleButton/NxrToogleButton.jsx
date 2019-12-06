import React, { useState } from 'react';

import './NxrToogleButton.scss';

export default function NxrToogleButton(props) {
  debugger;

  return (
    <div className="NxrToogle">
      <span className="NxrToogle_ModeTitle">{props.title}</span>
      <div className="NxrToogle_Container">
        <button value={props.firstTitle}
          className={`NxrToogle_Btn ${props.searchParam === props.firstTitle ? 'NxrToogle_Btn-Active' : 'NxrToogle_Btn-Inactive'}`}
          onClick={(e) => props.click(e)}>
          {props.firstTitle}
        </button>
        <button value={props.secondTitle}
          className={`NxrToogle_Btn ${props.searchParam === props.secondTitle ? 'NxrToogle_Btn-Active' : 'NxrToogle_Btn-Inactive'}`}
          onClick={(e) => props.click(e)}>
          {props.secondTitle}
        </button>
      </div>
    </div>
  )
}
