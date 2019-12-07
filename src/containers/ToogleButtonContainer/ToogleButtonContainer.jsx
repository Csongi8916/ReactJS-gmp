import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import NxrToogleButton from '../../components/UI/NxrToogleButton/NxrToogleButton';
import { SORT_BY, TITLE, GENRE, RELEASED_DATE, RAITING } from '../../constants';

const _ToogleButtonContainer = (props) => {
  const handleToogle = (e) => {
    switch (e.target.value) {
      case TITLE:
        props.onSetSearchParam(e.target.value);
        break;
      case GENRE:
        props.onSetSearchParam(e.target.value);
        break;
      case RELEASED_DATE:
        props.onSort(e.target.value);
        break;
      case RAITING:
        props.onSort(e.target.value);
        break;
    }
  }

  return (
    <NxrToogleButton title={props.title} firstTitle={props.firstTitle} secondTitle={props.secondTitle}
      shearchParam={props.shearchParam}
      sortParam={props.sortParam}
      click={handleToogle} />
  )
}

const mapStateToProps = state => ({
  movies: state.msr.movies,
  shearchParam: state.msr.shearchParam,
  sortParam: state.msr.sortParam,
});

const mapDispatchToProps = dispatch => {
  return {
    onSetSearchParam: (param) => dispatch(actions.setSearchParam(param)),
    onSort: (param) => dispatch(actions.fetchMovies(SORT_BY, param))
  }
}

const ToogleButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ToogleButtonContainer);

export default ToogleButtonContainer;
