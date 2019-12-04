import React, { useState } from 'react';
import NxrButton from '../../UI/NxrButton/NxrButton';
import ToogleButtonContainer from '../../../containers/ToogleButtonContainer/ToogleButtonContainer';

import './MovieSearchControls.scss';

export default function MovieSearchControls() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <div className="MovSearchControl">
      <div>
        <p className="MovSearchControl_SearchTitle">Find your movie</p>
        <input className="MovSearchControl_Input" type="text" onChange={(e) => setSearchInput(e.target.value)} />
        <NxrButton className="MovSearchControl_SearchBtn">Search</NxrButton>
      </div>
      <div className="MovSearchControl_SearchMode">
        <ToogleButtonContainer title="Search by" firstTitle="title" secondTitle="gengre" />
      </div>
    </div>
  )
}
