import React from "react";

const ContactList = ({ newContact, deleteContact }) => {
  return (
    <ul>
      {newContact.map((item) => (
        <li key={item.id}>
          <h3> {item.name}</h3>
          <p>{item.number}</p>
          <button data-id={item.id} onClick={deleteContact}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
