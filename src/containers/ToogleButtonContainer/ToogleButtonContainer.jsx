import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import NxrToogleButton from '../../components/UI/NxrToogleButton/NxrToogleButton';
import { SEARCH_BY, TITLE, GENRE, RELEASED_DATE, RAITING } from '../../constants';

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
        props.onSort(RELEASED_DATE);
        break;
      case RAITING:
        props.onSort(RAITING);
        break;
    }
  }

  return (
    <NxrToogleButton title={props.title} firstTitle={props.firstTitle} secondTitle={props.secondTitle}
      searchParam={props.searchParam}
      click={handleToogle} />
  )
}

const mapStateToProps = state => ({
  movies: state.msr.movies
});

const mapDispatchToProps = dispatch => {
  return {
    onSetSearchParam: (param) => dispatch(actions.setSearchParam(param)),
    onSort: (param) => dispatch(actions.sort(param))
  }
}

const ToogleButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ToogleButtonContainer);

export default ToogleButtonContainer;
