import React, { Component } from "react";
import Comp from "./components/samples/comp";
import PureComp from "./components/samples/pureComp";
import FuncComp from "./components/samples/funcComp";

import "./App.scss";

const createdReactElement = React.createElement('p', null, 'React.createElement()');

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
        {createdReactElement}
        <Comp />
        <PureComp />
        <FuncComp />
      </div>
    );
  }
}

export default App;