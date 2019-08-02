import React from "react";
import PropTypes from "prop-types";
import { Dropdown } from "semantic-ui-react";

const MovieDropdown = ({ movieData, value, handleChange, loading }) => (
  <Dropdown
    placeholder="Select movie"
    style={{ minWidth: "300px" }}
    selection
    options={movieData}
    value={value}
    loading={loading}
    onChange={handleChange}
  />
);

MovieDropdown.propTypes = {
  value: PropTypes.number,
  loading: PropTypes.bool,
  movieData: PropTypes.array,
  handleChange: PropTypes.func
};

export default MovieDropdown;
