import React, { useState } from 'react';
import NxrButton from '../../UI/NxrButton/NxrButton';
import ToogleButtonContainer from '../../../containers/ToogleButtonContainer/ToogleButtonContainer';
import { SEARCH_BY, TITLE, GENRE } from '../../../constants';

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
        <ToogleButtonContainer title={SEARCH_BY} firstTitle={TITLE} secondTitle={GENRE} />
      </div>
    </div>
  )
}
