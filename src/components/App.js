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

  addContact = (newContacts) => {
    const contact = {
      id: uuidv4(),
      name: newContacts.name,
      number: newContacts.number,
    };

    this.setState((prevState) => {
      return prevState.contacts.find(
        (contact) =>
          contact.name.toLowerCase() === newContacts.name.toLowerCase()
      )
        ? alert(`${newContacts.name} is already in contacts.`)
        : {
            contacts: [...prevState.contacts, contact],
          };
    });
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
    const { contacts, filter } = this.state;
    return [
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      ),
    ];
  };

  render() {
    const { filter } = this.state;
    // const getFilteredContact = this.getFilteredContact();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>

        <Filter filter={filter} onHandleFilter={this.onHandleFilter} />

        <ContactList
          // contacts={getFilteredContact} // помилка!!!
          contacts={this.state.contacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
