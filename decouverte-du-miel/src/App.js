import React, { Component } from "react";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import ListeMiels from "./Components/ListeMiels";
import axios from "axios";
//import { Link, Route } from "react-router-dom";

class App extends Component {
  state = {
    // miels => clé,
    // []    => valeur
    miels: [],
  };
  componentDidMount() {
    axios
      .get("https://my-json-server.typicode.com/Christophe-png/api-miels/miels")
      .then((response) => response.data)
      .then((data) => {
        this.setState({ miels: data });
      });
    console.log("mount");
  }
  render() {
    const { miels } = this.state;

    console.log("render", miels);
    return (
      <div className="App">
        <Header />
        <HomePage />
        <ListeMiels miels={miels} />
      </div>
    );
  }
}

export default App;
