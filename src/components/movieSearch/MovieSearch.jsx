import React from 'react';
import Logo from '../Logo/Logo';
import MovieSearchControls from './MovieSearchControls/MovieSearchControls';

import style from './MovieSearch.scss';

export default function MovieSearch() {
  return (
    <div className="mov-search">
      <div className="mov-search__logo">
        <Logo />
      </div>
      <div className="mov-search__content">
        <MovieSearchControls />
      </div>
    </div>
  )
}
