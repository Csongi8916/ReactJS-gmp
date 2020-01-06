import * as actionTypes from '../actions/MoviedDetailsActions/actionTypes';
import { updateObject } from '../../utils/reduxUtility';
import { SEARCH_BY, TITLE, GENRE, RELEASED_DATE, RAITING } from '../../constants';

const initialState = {
  movie: {},
  similarMovies: []
};

const getMovie = (state, action) => {
  return { ...state, movie: action.payload };
}

const getSimilarMovies = (state, action) => {
  return { ...state, movies: action.payload };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_SIMILAR_MOVIES:
      return getSimilarMovies(state, action);
    case actionTypes.GET_MOVIE:
      console.log(action.payload);
      return getMovie(state, action);
    default:
      return state;
  }
};

export default reducer;
