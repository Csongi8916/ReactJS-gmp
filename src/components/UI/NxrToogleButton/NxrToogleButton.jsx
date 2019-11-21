import React, { useState } from 'react';

import classes from './NxrToogleButton.scss';

export default function NxrToogleButton(props) {
  const [selectedOption, setSelectedOption] = useState(props.firstTitle);

  const handleToogle = (data) => {
    setSelectedOption(data);
  }

  return (
    <div className="NxrToogle">
      <span className="NxrToogle_ModeTitle">{props.title}</span>
      <div className="NxrToogle_Container">
        <button className={`NxrToogle_Btn ${selectedOption === props.firstTitle ? 'NxrToogle_Btn-Active' : 'NxrToogle_Btn-Inactive'}`}
          onClick={() => handleToogle(props.firstTitle)}>
          {props.firstTitle}
        </button>
        <button className={`NxrToogle_Btn ${selectedOption === props.secondTitle ? 'NxrToogle_Btn-Active' : 'NxrToogle_Btn-Inactive'}`}
          onClick={() => handleToogle(props.secondTitle)}>
          {props.secondTitle}
        </button>
      </div>
    </div>
  )
}
