import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import MovieSearchReducer from './store/reducers/movieSearchReducer';
import MovieDetailsReducer from './store/reducers/movieDetailsReducer';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';


const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  msr: MovieSearchReducer,
  mdr: MovieDetailsReducer
});

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, composeEnhancers(
  applyMiddleware(thunk)
));
let persistor = persistStore(store);

const app = (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);


ReactDOM.render(app, document.getElementById('root'));