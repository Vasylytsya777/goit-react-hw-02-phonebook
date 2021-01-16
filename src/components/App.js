import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (newContact) => {
    this.setState((prev) => ({
      contacts: [...prev.contacts, { id: uuidv4(), ...newContact }],
    }));
  };
  deleteContact = (e) => {
    const id = e.target.dataset.id;
    this.setState({
      contacts: [...this.state.contacts.filter((item) => item.id !== id)],
    });
  };

  onHandleFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContact = () => {
    return [
      ...this.state.contacts.filter((item) =>
        item.newContact.toLowerCase().includes(this.state.filter.toLowerCase())
      ),
    ];
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <h3>Find contacts by name</h3>
        <Filter
          filter={this.state.filter}
          onHandleFilter={this.onHandleFilter}
        />
        <ContactList
          newContact={this.state.contacts} // помилка!!!
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
