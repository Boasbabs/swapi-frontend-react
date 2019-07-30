import React from 'react'
import { Dropdown } from 'semantic-ui-react'


const MovieDropdown = ({movieData}) => (
  <Dropdown
    placeholder='Select movie'
    style={{width: "400px"}}
    selection
    options={movieData}
  />
)

export default MovieDropdown