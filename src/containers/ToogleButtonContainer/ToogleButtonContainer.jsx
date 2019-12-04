import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import NxrToogleButton from '../../components/UI/NxrToogleButton/NxrToogleButton';

function _ToogleButtonContainer(props) {
  /*useEffect(() => {
  }, []);*/

  return (
    <NxrToogleButton title={props.title} firstTitle={props.firstTitle} secondTitle={props.secondTitle} />
  )
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
  }
}

const ToogleButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ToogleButtonContainer);

export default ToogleButtonContainer;
