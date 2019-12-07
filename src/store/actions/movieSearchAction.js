import * as actionTypes from './actionTypes';
import * as constants from '../../constants';

export const search = (input) => {
  return {
    type: actionTypes.SEARCH,
    payload: input
  };
};

export const sort = ({ movies, param }) => {
  return {
    type: actionTypes.SORT,
    payload: { movies, param }
  };
};

export const setSearchParam = (searchParam) => {
  return {
    type: actionTypes.SET_SEARCH_PARAM,
    payload: searchParam
  };
};

export const setMovies = ({ movies }) => {
  return {
    type: actionTypes.SET_MOVIES,
    payload: movies
  };
};

export const getConfig = (mode, param) => {
  let config = { url: 'https://reactjs-cdp.herokuapp.com/movies?limit=30', action: setMovies };

  if (mode === constants.SORT_BY) {
    let sortParam = param === constants.RAITING ? 'vote_average' : 'release_date';
    config.url += `&sortBy=${sortParam}&sortOrder=desc`;
    config.action = sort;
  }
  if (mode === constants.SEARCH_BY) {
    //url += `&searchBy=${param}`;
  }

  return config;
}

export const fetchMovies = (mode, param) => {
  const config = getConfig(mode, param);

  return dispatch => {
    fetch(config.url)
      .then(response => {
        return response.json()
      })
      .then(response => {
        dispatch(config.action({ movies: response.data, param: param }));
      })
  }
}