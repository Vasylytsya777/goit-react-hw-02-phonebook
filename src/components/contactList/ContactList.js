import React from "react";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map((item) => (
        <li key={item.id}>
          <h3> {item.name}</h3>
          <p>{item.number}</p>
          <button type="button" data-id={item.id} onClick={deleteContact}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
