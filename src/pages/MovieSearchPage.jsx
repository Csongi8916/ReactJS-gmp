import React from 'react';
import MovieSearch from '../components/MovieSearch/MovieSearch';
import MovieResultContainer from "../containers/MovieResultContainer/MovieResultContainer";

function MovieSearchPage(props) {
  return (
    <React.Fragment>
      <MovieSearch />
      <MovieResultContainer isDetailsResult={false} />
    </React.Fragment>
  )
}

export default MovieSearchPage;