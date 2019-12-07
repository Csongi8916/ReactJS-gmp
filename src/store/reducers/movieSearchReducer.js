import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/reduxUtility';
import { SEARCH_BY, TITLE, GENRE, RELEASED_DATE, RAITING } from '../../constants';

const initialState = {
  movies: [],
  shearchParam: 'title',
  sortParam: RELEASED_DATE
};

const setSearchParam = (state, action) => {
  let newState = { ...state };
  newState.shearchParam = action.payload;
  return newState;
}

const sort = (state, action) => {
  console.log('SORT ' + action.payload.param);
  let newState = { ...state };
  newState.movies = action.payload.movies
  newState.sortParam = action.payload.param;
  return newState;
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
    case actionTypes.SORT:
      return sort(state, action);
    default:
      return state;
  }
};

export default reducer;
