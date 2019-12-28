import React from 'react';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import MovieResult from "../components/movieResult/MovieResult";
import { movies } from '../data/dummy.js';


function MovieDetailsPage(props) {
  let movie = movies[movies.length - 1];

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
      <MovieResult isDetailsResult={true} movies={movies} />

    </React.Fragment>
  )
}

export default MovieDetailsPage;