import React, { useEffect } from 'react';
import MovieResult from '../../components/MovieResult/MovieResult';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/MovieSearchActions/index';
import * as constants from '../../constants';

function _MovieResultContainer(props) {
  useEffect(() => {
    if (props.isDetailsResult) {
      debugger;
      props.onInitMovies(props.searchParam, props.input);
    }
  }, []);

  return (
    <MovieResult movies={props.movies} isDetailsResult={props.isDetailsResult} />
  )
}

const mapStateToProps = state => ({
  movies: state.msr.movies,
  searchParam: state.msr.shearchParam,
  input: state.msr.searchInput
});

const mapDispatchToProps = dispatch => {
  return {
    onInitMovies: (searchParam, input) => {
      // dispatch(actions.fetchMovies());
      dispatch(actions.fetchMovies(constants.SEARCH_BY, searchParam, input));
    }
  }
}

const MovieResultContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(_MovieResultContainer);

export default MovieResultContainer;
