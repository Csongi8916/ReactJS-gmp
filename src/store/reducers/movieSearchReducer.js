import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/reduxUtility';

const initialState = {
  movies: []
};

const searchByTitle = (state, action) => {
  console.log('filterByTitle');
  const updatedState = {
    movies: [...movies, 'new movie'],
  }
  return updateObject(state, updatedState);
}

const searchByGenre = (state, action) => {
  console.log('filterByGenre');
  return state;
}

const setMovies = (state, action) => {
  let newState = { ...state };
  newState.movies = [...action.payload];

  return newState;
  //return updateObject(state, action.payload);
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_BY_TITLE:
      return searchByTitle(state, action);
    case actionTypes.SEARCH_BY_GENRE:
      return searchByGenre(state, action);
    case actionTypes.SET_MOVIES:
      return setMovies(state, action);
    default:
      return state;
  }
};

export default reducer;
