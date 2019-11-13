import React, { useState } from 'react';

import classes from './NxrToogleButton.scss';

export default function NxrToogleButton(props) {
  const [isActiveLeft, setActive] = useState(true);

  return (
    <div className="NxrToogle">
      <span className="NxrToogle_ModeTitle">{props.title}</span>
      <div className="NxrToogle_Container">
        <div
          onClick={() => setActive(true)}
          className={`NxrToogle_Btn ${isActiveLeft ? 'NxrToogle_Btn-Active' : 'NxrToogle_Btn-Inactive'}`}>{props.firstTitle}</div>
        <div
          onClick={() => setActive(false)}
          className={`NxrToogle_Btn ${isActiveLeft ? 'NxrToogle_Btn-Inactive' : 'NxrToogle_Btn-Active'}`}>{props.secondTitle}</div>
      </div>
    </div>
  )
}
