import React from 'react'

import classes from './MovieSearchControls.scss';

export default function MovieSearchControls() {
  return (
    <div>
      <p className="MovSearchControl_SearchTitle">Find your movie</p>
      <input className="MovSearchControl_Input" type="text" />
    </div>
  )
}
