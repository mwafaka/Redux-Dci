import React, { Component } from "react";

import "./App.css";
// import { createStore } from "redux";
import Counter from "./Counter";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Redux example</h1>
        <Counter />
      </div>
    );
  }
}

export default App;
