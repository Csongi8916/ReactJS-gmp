import React from 'react';

import classes from './NxrToogleButton.scss';

export default function NxrToogleButton(props) {
  return (
    <div className="NxrToogleBtn">
      <div className="NxrToogleBtn_First">{props.firstTitle}</div>
      <div className="NxrToogleBtn_Second">{props.secondTitle}</div>
    </div>
  )
}
