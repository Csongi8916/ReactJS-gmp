import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/reduxUtility';

const initialState = {
  movies: [],
  shearchParam: 'title',
};

const setSearchParam = (state, action) => {
  console.log('setSearchParam');
  let newState = { ...state };
  newState.shearchParam = action.payload;
  debugger;

  return newState;
}

const searchByGenre = (state, action) => {
  console.log('searchByGenre');
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
    case actionTypes.SET_SEARCH_PARAM:
      return setSearchParam(state, action);
    case actionTypes.SET_MOVIES:
      return setMovies(state, action);
    default:
      return state;
  }
};

export default reducer;
