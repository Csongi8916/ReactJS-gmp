import React from "react";
import Comp from "./components/samples/comp";
import PureComp from "./components/samples/pureComp";
import FuncComp from "./components/samples/funcComp";
import ErrorBoundary from './ErrorBoundary';

import "./App.scss";
import { Route } from 'react-router-dom';
import MovieSearch from './components/MovieSearch/MovieSearch';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Layout from "./layouts/Layout/Layout";
import MovieResult from './components/MovieResult/MovieResult';
import MovieResultContainer from "./containers/MovieResultContainer/MovieResultContainer";
import MovieSearchPage from "./pages/MovieSearchPage";

//const createdReactElement = React.createElement('p', null, 'React.createElement()');

const App = () => {
  return (
    <ErrorBoundary>
      <div className="app">
        <div className="app__content">
          <Layout>
          </Layout>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;