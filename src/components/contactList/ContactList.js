import React from "react";

const ContactList = ({ list, deleteContact }) => {
  console.log(list);
  return (
    <>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <h3> {item.name}</h3>
            <p>{item.number}</p>
            <button type="submit" data-id={item.id} onClick={deleteContact}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;