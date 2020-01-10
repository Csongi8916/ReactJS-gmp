import React from 'react';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import "regenerator-runtime/runtime";
import MovieSearchReducer from '../src/store/reducers/movieSearchReducer';
import MovieDetailsReducer from '../src/store/reducers/movieDetailsReducer';
// import "./App.scss";

const rootReducer = combineReducers({
  msr: MovieSearchReducer,
  mdr: MovieDetailsReducer
});

let composeEnhancers;

if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
} else {
  composeEnhancers = compose;
}

const makeStore = (initialState, { isServer }) =>
  isServer
    ? createStore(rootReducer, initialState)
    : createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)));
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(makeStore)(MyApp);
