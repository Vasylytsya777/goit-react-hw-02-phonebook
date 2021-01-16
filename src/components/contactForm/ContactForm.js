import React, { Component } from "react";
// import PropTypes from "prop-types";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    // console.log("value", value);
    // console.log("name", name);
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.addContact({
      name: this.state.name,
      number: this.state.number,
    });
    this.setState({ name: "", number: "" }); //як висипати стейт по іншому
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.onHandleSubmit} style={{ display: "flex" }}>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            name="name"
            onChange={this.onHandleChange}
          />
        </label>
        <label>
          {/* <label key={uuidv4()}> */}
          Number
          <input
            type="text"
            placeholder="Enter number"
            value={number}
            name="number"
            onChange={this.onHandleChange}
          />
        </label>

        <button type="submit">Add contact {name}</button>
      </form>
    );
  }
}
