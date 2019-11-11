import React from 'react';
import Logo from '../logo/Logo';
import style from './MovieSearch.scss'

export default function MovieSearch() {
  return (
    <div className="mov-search">
      <Logo />
      <p className="mov-search__search-title">Find your movie</p>
    </div>
  )
}
