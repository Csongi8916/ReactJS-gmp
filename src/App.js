import React from "react";
import Comp from "./components/samples/comp";
import PureComp from "./components/samples/pureComp";
import FuncComp from "./components/samples/funcComp";
import ErrorBoundary from './ErrorBoundary';

import "./App.scss";
import MovieSearch from './components/MovieSearch/MovieSearch';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Layout from "./layouts/Layout/Layout";
import MovieResult from './components/MovieResult/MovieResult'
import { movies } from './data/dummy.js';

//const createdReactElement = React.createElement('p', null, 'React.createElement()');

const App = () => {
  let movie = movies[movies.length - 1];

  return (
    <ErrorBoundary>
      <div className="app">
        <div className="app__content">
            <Layout>
              <MovieSearch />
              <MovieResult isDetailsResult={false} movies={movies} />
              
              {/* <MovieResult isDetailsResult={false} movies={[]} /> */}

              {/* <MovieDetails
                title={movie.title}
                image={movie.poster_path}
                year={movie.release_date}
                rate={movie.vote_average}
                genres={movie.genres}
                runtime={movie.runtime}
                overview={movie.overview}
              />
              <MovieResult isDetailsResult={true} movies={movies} />
            */}
            </Layout>
        </div>
      </div>
    </ErrorBoundary>

  );
}

export default App;