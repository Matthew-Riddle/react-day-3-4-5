import React from 'react'

const navItem = props => (
  <a href={props.link} className='navbar-item'>
    {props.name}
  </a>
)

export default navItem
