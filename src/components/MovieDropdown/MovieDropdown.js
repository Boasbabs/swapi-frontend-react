import React from "react";
import PropTypes from "prop-types";
import { Dropdown } from "semantic-ui-react";

const MovieDropdown = ({ movieData, value, handleChange, disabled }) => (
  <Dropdown
    placeholder="Select movie"
    style={{ width: "400px" }}
    selection
    options={movieData}
    value={value}
    disabled={disabled}
    onChange={handleChange}
  />
);

MovieDropdown.propTypes = {
  value: PropTypes.number,
  disabled: PropTypes.bool,
  movieData: PropTypes.array,
  handleChange: PropTypes.func
};

export default MovieDropdown;
