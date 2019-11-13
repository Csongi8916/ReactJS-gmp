import React, { Component } from "react";
import Comp from "./components/samples/comp";
import PureComp from "./components/samples/pureComp";
import FuncComp from "./components/samples/funcComp";

import "./App.scss";
import MovieSearch from './components/MovieSearch/MovieSearch';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Layout from "./layouts/Layout/Layout";
import MovieResult from './components/MovieResult/MovieResult'

//const createdReactElement = React.createElement('p', null, 'React.createElement()');

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__content">
          <Layout>
            <MovieSearch />
            <MovieResult isDetailsResult={true} />

            {/*<MovieDetails />
            <MovieResult isDetailsResult={true} />*/}
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;