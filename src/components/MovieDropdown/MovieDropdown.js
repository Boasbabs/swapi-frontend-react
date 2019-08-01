import React from 'react'
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react'


const MovieDropdown = ({movieData, value, handleChange}) => (
  <Dropdown
    placeholder='Select movie'
    style={{width: "400px"}}
    selection
    options={movieData}
    value={value}
    onChange={handleChange}
  />
)

MovieDropdown.propTypes = {
  movieData: PropTypes.array,
  value: PropTypes.string,
  handleChange: PropTypes.func,
}

export default MovieDropdown