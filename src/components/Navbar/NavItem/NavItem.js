import React from 'react'
import { NavLink } from 'react-router-dom'

const navItem = props => (
  <NavLink to={props.link} exact className='navbar-item'>
    {props.name}
  </NavLink>
)

export default navItem
