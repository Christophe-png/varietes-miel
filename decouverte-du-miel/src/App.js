import React, { Component } from "react";
import Header from "./Components/Header";
//import { Link, Route } from "react-router-dom";

class App extends Component {
  state = {
    miels: [],
  };

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
