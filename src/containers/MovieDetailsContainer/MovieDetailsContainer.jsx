import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/MoviedDetailsActions/index';
import MovieDetailsPage from '../../pages/MovieDetailsPage';
import { movies } from '../../data/dummy.js';

function _MovieDetailsContainer(props) {
  let url = props.location.search;
  console.log(url);
  useEffect(() => {
    props.getMovie();
  }, []);

  return (
    <React.Fragment>
      <MovieDetailsPage movie={props.movie} similarMovies={movies} />
    </React.Fragment>
  )
}

const mapStateToProps = state => ({ movie: state.mdr.movie });

const mapDispatchToProps = dispatch => {
  return {
    getMovie: () => dispatch(actions.fetchMovie(337167))
  }
}

const MovieDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(_MovieDetailsContainer);

export default MovieDetailsContainer;
