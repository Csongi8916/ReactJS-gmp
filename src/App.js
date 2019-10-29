import React, { Component } from "react";
import Comp from "./components/samples/comp";
import PureComp from "./components/samples/pureComp";
import FuncComp from "./components/samples/funcComp";

import "./App.css";

const createdReactElement = React.createElement('p', null, 'React.createElement()');

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        {createdReactElement}
        <Comp />
        <PureComp />
        <FuncComp />
      </div>
    );
  }
}

export default App;