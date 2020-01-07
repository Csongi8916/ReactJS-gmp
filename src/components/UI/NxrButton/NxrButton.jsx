import React from 'react';
import './NxrButton.scss';

export default function NxrButton(props) {
  return (
    <button className="NrxBtn" onClick={(e) => props.click(e)}>{props.children}</button>
  )
}
