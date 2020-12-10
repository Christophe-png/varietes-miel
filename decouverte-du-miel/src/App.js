import React, { Component } from "react";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import Miel from "./Components/Miel";
//import { Link, Route } from "react-router-dom";

const Miels = [];
class App extends Component {
  state = {
    miels: [],
  };

  render() {
    return (
      <div className="App">
        <Header />
        <HomePage />
        <Miel />
      </div>
    );
  }
}

export default App;
