import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/MoviedDetailsActions/index';
import MovieDetailsPage from '../../pages/MovieDetailsPage';
import { movies } from '../../data/dummy.js';

function _MovieDetailsContainer(props) {
  useEffect(() => {
    const id = props.location.state.id;
    props.getMovie(id);
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
    getMovie: (id) => dispatch(actions.fetchMovie(id))
  }
}

const MovieDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(_MovieDetailsContainer);

export default MovieDetailsContainer;
