import React, { Component } from "react";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import ListeMiels from "./Components/ListeMiels";
//import { Link, Route } from "react-router-dom";

class App extends Component {
  state = {
    miels: [],
  };

  render() {
    return (
      <div className="App">
        <Header />
        <HomePage />
        <ListeMiels />
      </div>
    );
  }
}

export default App;
