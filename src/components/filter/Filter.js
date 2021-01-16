import React from "react";

const Filter = ({ filter, onHandleFilter }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onHandleFilter}
      ></input>
    </>
  );
};

export default Filter;
