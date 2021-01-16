import React from "react";

const Filter = (filter, onChangeFilter) => {
  return (
    <input type="text" value={filter} onChange={onChangeFilter}>
      {" "}
    </input>
  );
};

export default Filter;
