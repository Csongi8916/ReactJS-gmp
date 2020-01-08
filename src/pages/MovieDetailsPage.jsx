import React from 'react';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import MovieResult from "../components/movieResult/MovieResult";
import MovieResultContainer from '../containers/MovieResultContainer/MovieResultContainer';


function MovieDetailsPage({ movie, similarMovies }) {
  return (
    <React.Fragment>
      <MovieDetails
        title={movie.title}
        image={movie.poster_path}
        year={movie.release_date}
        rate={movie.vote_average}
        genres={movie.genres}
        runtime={movie.runtime}
        overview={movie.overview}
      />
      {/*<MovieResult isDetailsResult={true} movies={similarMovies} />*/}
      <MovieResultContainer isDetailsResult={true} />

    </React.Fragment>
  )
}

export default MovieDetailsPage;