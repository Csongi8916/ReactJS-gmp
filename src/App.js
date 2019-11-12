import React, { Component } from "react";
import Comp from "./components/samples/comp";
import PureComp from "./components/samples/pureComp";
import FuncComp from "./components/samples/funcComp";

import "./App.scss";
import MovieSearchPage from "./containers/MovieSearchPage/MovieSearchPage";
import Layout from "./layouts/Layout/Layout";

//const createdReactElement = React.createElement('p', null, 'React.createElement()');

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__content">
          <Layout>
            <MovieSearchPage />
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;