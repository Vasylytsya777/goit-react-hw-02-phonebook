import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
// // import Section from "./section/Sections";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };
  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    const { login, number, name } = this.state;

    console.log(`
      Login: ${login}
      Email: ${number}
      Password: ${name}
    `);

    this.props.onSubmit({ ...this.state });
    // this.reset();
  };

  // reset = () => {
  //   this.setState({ ...INITIAL_STATE });
  // };

  render() {
    const { login, number, name } = this.state;

    return (
      <>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label key={uuidv4()}>
            Name
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label key={uuidv4()}>
            Number
            <input
              type="text"
              placeholder="Enter number"
              name="number"
              value={number}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Add contact{login}</button>
        </form>
        <h2>Contacts</h2>
        {/* <ContactForm ... /> */}
        {/* <h2>Contacts</h2> */}
        {/* <Filter ... />
  <ContactList ... /> */}
      </>
    );
  }
}
