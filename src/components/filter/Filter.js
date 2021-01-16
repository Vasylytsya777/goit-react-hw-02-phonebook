import React from "react";

const Filter = ({ filter, onHandleFilter }) => {
  return <input type="text" value={filter} onChange={onHandleFilter} />;
};

export default Filter;
