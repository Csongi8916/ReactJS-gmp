import React, { Component } from "react";
import Comp from "./components/samples/comp";
import PureComp from "./components/samples/pureComp";
import FuncComp from "./components/samples/funcComp";

import "./App.scss";
import MovieSearch from './components/MovieSearch/MovieSearch';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Layout from "./layouts/Layout/Layout";
import MovieResult from './components/MovieResult/MovieResult'
import { movies } from './data/dummy.js';

//const createdReactElement = React.createElement('p', null, 'React.createElement()');

class App extends Component {
  render() {
    let movie = movies[movies.length - 1];

    return (
      <div className="app">
        <div className="app__content">
          <Layout>
            <MovieSearch />
            <MovieResult isDetailsResult={false} />

            {/*<MovieDetails
              title={movie.title}
              image={movie.poster_path}
              year={movie.release_date}
              rate={movie.vote_average}
              genres={movie.genres}
              runtime={movie.runtime}
              overview={movie.overview}
            />
            <MovieResult isDetailsResult={true} />*/}
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;