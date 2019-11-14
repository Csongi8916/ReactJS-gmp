import React from 'react';
import MovieResultHeader from './MovieResultHeader/MovieResultHeader';
import MovieCard from '../MovieCard/MovieCard';

import { movies } from '../../data/dummy.js';
import classes from './MovieResult.scss';

export default function MovieResult({ isDetailsResult }) {

  return (
    <div className="MovieResult" style={{ minHeight: '65vh' }}>
      <MovieResultHeader needTotal={!isDetailsResult} needSortToogle={!isDetailsResult} />
      <div className="MovieResult_MovieCardList">
        {movies.map(movie => (
          <MovieCard title={movie.title} image={movie.poster_path} year={movie.release_date} genres={movie.genres} />
        ))}
      </div>
    </div>
  )
}
