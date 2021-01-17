import React from "react";

const Filter = ({ filter, onHandleFilter }) => {
  const onFilterChange = (e) => {
    onHandleFilter(e.target.value);
  };
  return (
    <>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      ></input>
    </>
  );
};

export default Filter;
