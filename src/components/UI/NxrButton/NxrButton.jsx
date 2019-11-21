import React from 'react';
import './NxrButton.scss';

export default function NxrButton(props) {
  return (
    <React.Fragment>
      <button className="NrxBtn" onClick={props.click}>{props.children}</button>
    </React.Fragment>
  )
}
