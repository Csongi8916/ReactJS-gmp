import React from 'react';
import MovieResultHeader from './MovieResultHeader/MovieResultHeader';
import MovieCard from '../MovieCard/MovieCard';

import classes from './MovieResult.scss';

export default function MovieResult({ isDetailsResult, movies }) {

  return (
    <div className="MovieResult" style={{ minHeight: '65vh' }}>
      <MovieResultHeader needTotal={!isDetailsResult} needSortToogle={!isDetailsResult} count={movies.length} />
      <div className="MovieResult_MovieCardList">
        {movies && movies.length > 0 ? (
          movies.map(movie => (
            <MovieCard key={movie.id} title={movie.title} image={movie.poster_path} year={movie.release_date} genres={movie.genres} />
          ))
        ) : (
            <p style={{ fontSize: '38px' }}>No films found</p>
          )
        }
      </div>
    </div>
  )
}
