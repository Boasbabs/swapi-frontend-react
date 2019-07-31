import React from 'react'
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

export default MovieDropdown