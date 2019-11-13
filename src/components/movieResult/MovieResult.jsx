import React from 'react';
import MovieResultHeader from './MovieResultHeader/MovieResultHeader';
import MovieCard from '../MovieCard/MovieCard';

import classes from './MovieResult.scss';

export default function MovieResult({ isDetailsResult }) {
  return (
    <div className="MovieResult" style={{ minHeight: '65vh' }}>
      <MovieResultHeader needTotal={!isDetailsResult} needSortToogle={!isDetailsResult} />
      <div className="MovieResult_MovieCardList">
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  )
}
