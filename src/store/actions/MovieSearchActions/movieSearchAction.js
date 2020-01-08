import * as actionTypes from './actionTypes';
import * as constants from '../../../constants';

export const search = ({ movies, param, input }) => {
  return {
    type: actionTypes.SEARCH,
    payload: { movies, param, input }
  };
};

/*export const sort = ({ movies, param }) => {
  return {
    type: actionTypes.SORT,
    payload: { movies, param }
  };
};*/

export const sort = (param) => {
  return {
    type: actionTypes.SORT,
    payload: param
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

export const getConfig = (mode, param, input) => {
  let config = { url: 'https://reactjs-cdp.herokuapp.com/movies?limit=30', action: setMovies };
  /*if (mode === constants.SORT_BY) {
    let sortParam = param === constants.RAITING ? 'vote_average' : 'release_date';
    config.url += `&sortBy=${sortParam}&sortOrder=desc`;
    config.action = sort;
  }*/
  if (mode === constants.SEARCH_BY) {
    if (input) {
      config.url += `&search=${input}&searchBy=${param}`;
    }
    config.action = search;
  }

  return config;
}

export const fetchMovies = (mode, param, input) => {
  const config = getConfig(mode, param, input);

  return dispatch => {
    fetch(config.url)
      .then(response => {
        return response.json()
      })
      .then(response => {
        dispatch(config.action({ movies: response.data, param: param, input: input }));
      })
  }
}