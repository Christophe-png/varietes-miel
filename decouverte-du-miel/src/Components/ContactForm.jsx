import React, { Component } from "react";
import "./ContactForm.css";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prénom: "",
      email: "",
    };
  }

  change = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  submit = (e) => {
    e.preventDefault();
  };

  render() {
    const { prénom, nom, email } = this.state;
    return (
      <div className="ContactForm">
        <div className="contactform-title">
          <h1>Contactez-nous</h1>
        </div>
        <div className="contactform-container">
          <form onSubmit={this.submit}>
            <label htlmFor="prénom">
              <input
                type="text"
                id="prénom"
                placeholder="Votre prénom"
                className="form-control"
                value={prénom}
                onChange={this.change}
              />
            </label>
            <label htlmFor="nom">
              <input
                type="text"
                id="nom"
                placeholder="Votre nom"
                className="form-control"
                value={nom}
                onChange={this.change}
              />
            </label>
            <label htlmFor="msg">
              <input
                type="text"
                id="msg"
                placeholder="Votre message"
                className="form-control"
                value={prénom}
                onChange={this.change}
              />
            </label>
            <button className="searchButton-form" type="submit">
              Envoyer
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
