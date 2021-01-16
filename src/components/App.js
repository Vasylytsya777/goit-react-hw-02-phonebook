import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./contactForm/ContactForm";
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
  };

  addContact = (newContact) => {
    this.setState((prev) => ({
      contacts: [...prev.contacts, { id: uuidv4(), ...newContact }],
    }));
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>

        <h2>Contacts</h2>
        <ContactForm addContact={this.addContact} />
        {/* <h2>Contacts</h2> */}
        {/* <Filter ... />
  <ContactList ... /> */}
      </>
    );
  }
}
