import React, { Component } from "react";
// import PropTypes from "prop-types";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  onHandleChange = (e) => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
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
    return (
      <form onSubmit={this.onHandleSubmit} style={{ display: "flex" }}>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter Name"
            value={this.state.name}
            name="name"
            onChange={this.onHandleChange}
          />
          {/* <label key={uuidv4()}> */}
          Number
          <input
            type="text"
            placeholder="Enter number"
            value={this.state.number}
            name="number"
            onChange={this.onHandleChange}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
