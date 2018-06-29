import React from 'react'

import './Navbar.css'

import NavBrand from './NavBrand/NavBrand'
import NavItem from './NavItem/NavItem'

const capitaliseFirstLetter = string =>
  string.charAt(0).toUpperCase() + string.slice(1)

const navBar = props => {
  return (
    <nav className='Navbar navbar is-fixed-top' aria-label='main navigation'>
      <div className='navbar-brand'>
        <NavBrand name={props.name} />
        <a
          role='button'
          className='navbar-burger'
          data-target='navMenu'
          aria-label='menu'
          aria-expanded='false'
        >
          <span aria-hidden='true' />
          <span aria-hidden='true' />
          <span aria-hidden='true' />
        </a>
      </div>
      <div className='navbar-menu' id='navMenu'>
        <div className='navbar-end'>
          {
            props.links.map(link => (
              <NavItem
                key={link}
                name={capitaliseFirstLetter(link)}
                link={`/${link === 'home' ? '' : link}`}
              />
            ))
          }
        </div>
      </div>
    </nav>
  )
}

export default navBar
