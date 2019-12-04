import React, { useEffect } from 'react';
import MovieResultHeader from './MovieResultHeader/MovieResultHeader';
import MovieCard from '../MovieCard/MovieCard';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import './MovieResult.scss';

function MovieResult(props) {
  return (
    <div className="MovieResult" style={{ minHeight: '65vh' }}>
      <MovieResultHeader needTotal={!props.isDetailsResult} needSortToogle={!props.isDetailsResult} count={props.movies.length} />
      <div className="MovieResult_MovieCardList">
        {console.log(props.movies)}
        {props.movies && props.movies.length > 0 ? (
          props.movies.map(movie => (
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

export default MovieResult;


