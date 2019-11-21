import React from 'react';
import Logo from '../Logo/Logo';
import MovieSearchControls from './MovieSearchControls/MovieSearchControls';

import './MovieSearch.scss';

export default function MovieSearch() {
  return (
    <div className="MovSearch">
      <div className="MovSearch_Logo">
        <Logo />
      </div>
      <div className="MovSearch_Content">
        <MovieSearchControls />
      </div>
    </div>
  )
}
