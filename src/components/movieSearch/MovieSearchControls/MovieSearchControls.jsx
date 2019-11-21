import React, { useState } from 'react';
import NxrButton from '../../UI/NxrButton/NxrButton';
import NxrToogleButton from '../../UI/NxrToogleButton/NxrToogleButton';

import classes from './MovieSearchControls.scss';

export default function MovieSearchControls() {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  }

  const searchMovie = () => {
    console.log(searchInput);
  }

  return (
    <div className="MovSearchControl">
      <div>
        <p className="MovSearchControl_SearchTitle">Find your movie</p>
        <input className="MovSearchControl_Input" type="text" onChange={handleSearchInputChange} />
        <NxrButton click={searchMovie}>Search</NxrButton>
      </div>
      <div className="MovSearchControl_SearchMode">
        <NxrToogleButton title="Search by" firstTitle="title" secondTitle="gengre" />
      </div>
    </div>
  )
}
