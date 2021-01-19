import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ filter, onHandleFilter }) => {
  const onFilterChange = (e) => {
    onHandleFilter(e.target.value);
  };
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.inputName}>Find contacts by name</h3>
      <input
        className={styles.filter}
        type="text"
        name="filter"
        value={filter}
        placeholder="Filter Name"
        onChange={onFilterChange}
      ></input>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  onHandleFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
