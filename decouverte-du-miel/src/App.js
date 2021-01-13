import React, { Component } from "react";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import ListeMiels from "./Components/ListeMiels";
import Miel from "./Components/Miel";
import Articles from "./Components/Articles";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

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
    const { miels, nomFilter } = this.state;

    console.log("render", miels);
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/miel" component={Miel} />
            <Route path="/articles" component={Articles} />
            <Route path="/contact-form" component={ContactForm} />
            <HomePage />
          </Switch>
          <ListeMiels miels={miels} />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
