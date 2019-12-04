import * as actionTypes from './actionTypes';

export const searchByTitle = (title) => {
  return {
    type: actionTypes.SEARCH_BY_TITLE,
    payload: title
  };
};

export const searchByGenre = (genre) => {
  return {
    type: actionTypes.SEARCH_BY_GENRE,
    payload: genre
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
    fetch('https://reactjs-cdp.herokuapp.com/movies')
      .then(response => {
        return response.json()
      })
      .then(response => {
        dispatch(setMovies(response.data));
      })
  }
}