import * as actionTypes from './actionTypes';

export const search = (input) => {
  return {
    type: actionTypes.SEARCH,
    payload: input
  };
};

export const sort = (sortParam) => {
  return {
    type: actionTypes.SORT,
    payload: sortParam
  };
};

export const setSearchParam = (searchParam) => {
  return {
    type: actionTypes.SET_SEARCH_PARAM,
    payload: searchParam
  };
};

export const setMovies = (movies) => {
  return {
    type: actionTypes.SET_MOVIES,
    payload: movies
  };
};

export const fetchMovies = () => {
  return dispatch => {
    fetch('https://reactjs-cdp.herokuapp.com/movies?limit=30"')
      .then(response => {
        return response.json()
      })
      .then(response => {
        dispatch(setMovies(response.data));
      })
  }
}