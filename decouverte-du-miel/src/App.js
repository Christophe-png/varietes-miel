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
        <Miel
          nom="Miel d'Acacia"
          image="https://s2.semencesdupuy.com/12572-medium_default/acacia-dealbata.jpg"
          couleur="trés clair, blond"
          bienfaits="régulateur intestinal, recommandé pour les jeunes enfants"
        />
      </div>
    );
  }
}

export default App;
