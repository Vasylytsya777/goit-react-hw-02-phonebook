import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map((item) => (
        <li className={styles.listItem} key={item.id}>
          <h3>{item.name}:</h3>
          <p className={styles.contactText}>{item.number}</p>
          <button
            className={styles.deleteButton}
            type="button"
            data-id={item.id}
            onClick={deleteContact}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
