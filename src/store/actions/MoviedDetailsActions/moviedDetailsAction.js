import * as actionTypes from './actionTypes';
import * as constants from '../../../constants';


export const getMovie = ({ movie }) => {
  return {
    type: actionTypes.GET_MOVIE,
    payload: movie
  };
};

export const getSimilarMovies = ({ movies }) => {
  return {
    type: actionTypes.GET_SIMILAR_MOVIES,
    payload: movies
  };
};

export const fetchMovie = (id) => {
  const header = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };
  const url = `https://reactjs-cdp.herokuapp.com/movies/${id}`;

  return dispatch => {
    fetch(url, header)
      .then(response => {
        return response.json()
      })
      .then(response => {
        dispatch(getMovie({ movie: response }));
      })
  }
}