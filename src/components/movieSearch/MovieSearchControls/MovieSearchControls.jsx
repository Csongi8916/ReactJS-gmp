import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import NxrButton from '../../UI/NxrButton/NxrButton';
import ToogleButtonContainer from '../../../containers/ToogleButtonContainer/ToogleButtonContainer';
import * as actions from '../../../store/actions/MovieSearchActions/index';
import * as constants from '../../../constants';

import './MovieSearchControls.scss';

function _MovieSearchControls(props) {
  const [searchInput, setSearchInput] = useState('');

  return (
    <div className="MovSearchControl">
      <div>
        <p className="MovSearchControl_SearchTitle">Find your movie</p>
        <input className="MovSearchControl_Input" type="text" onChange={(e) => setSearchInput(e.target.value)} />
        <Link to={{
          pathname: `search`,
          search: `param=${searchInput}`
        }}>
          <NxrButton click={() => props.onSearch(props.location, props.shearchParam, searchInput)} className="MovSearchControl_SearchBtn">Search</NxrButton>
        </Link>
      </div>
      <div className="MovSearchControl_SearchMode">
        <ToogleButtonContainer title={constants.SEARCH_BY} firstTitle={constants.TITLE} secondTitle={constants.GENRE} />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  shearchParam: state.msr.shearchParam,
  searchInput: state.msr.searchInput
});

const mapDispatchToProps = dispatch => {
  return {
    onSearch: (location, shearchParam, input) => {
      dispatch(actions.fetchMovies(constants.SEARCH_BY, shearchParam, input));
    }
  }
}

const MovieSearchControls = connect(
  mapStateToProps,
  mapDispatchToProps
)(_MovieSearchControls);

export default withRouter(MovieSearchControls);

