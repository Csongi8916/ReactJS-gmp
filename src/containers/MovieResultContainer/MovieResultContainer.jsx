import React, { useEffect } from 'react';
import MovieResult from '../../components/MovieResult/MovieResult';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/MovieSearchActions/index';

function _MovieResultContainer(props) {
  /*useEffect(() => {
    props.onInitMovies();
  }, []);*/

  return (
    <MovieResult movies={props.movies} isDetailsResult={false} />
  )
}

const mapStateToProps = state => ({ movies: state.msr.movies });

const mapDispatchToProps = dispatch => {
  return {
    onInitMovies: () => {
      dispatch(actions.fetchMovies())
    }
  }
}

const MovieResultContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(_MovieResultContainer);

export default MovieResultContainer;
