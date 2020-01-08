import * as actionTypes from '../actions/MovieSearchActions/actionTypes';
import { updateObject } from '../../utils/reduxUtility';
import { SEARCH_BY, TITLE, GENRE, RELEASED_DATE, RAITING } from '../../constants';

const initialState = {
  movies: [],
  shearchParam: 'title',
  searchInput: '',
  sortParam: RELEASED_DATE
};

const search = (state, action) => {
  return { ...state, movies: action.payload.movies, searchInput: action.payload.input };
}

/*const sort = (state, action) => {
  return { ...state, movies: action.payload.movies, sortParam: action.payload.param };
}*/

const sort = (state, action) => {
  const sortedMovies = [...state.movies].sort(function (a, b) {
    if (action.payload === RELEASED_DATE) {
      return new Date(b.release_date) - new Date(a.release_date);
    } else {
      return b.vote_average - a.vote_average;
    }
  });
  return { ...state, movies: sortedMovies, sortParam: action.payload };
}

const setSearchParam = (state, action) => {
  return { ...state, shearchParam: action.payload };
}

const setMovies = (state, action) => {
  return { ...state, movies: action.payload };
}

const getMovie = (state, action) => {
  return { ...state, movies: action.payload };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCH_PARAM:
      return setSearchParam(state, action);
    case actionTypes.SET_MOVIES:
      return setMovies(state, action);
    case actionTypes.SORT:
      return sort(state, action);
    case actionTypes.SEARCH:
      return search(state, action);
    case actionTypes.GET_MOVIE:
      return getMovie(state, action);
    default:
      return state;
  }
};

export default reducer;
