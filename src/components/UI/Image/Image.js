import React from 'react'

import classes from './Image.css'

const image = props => (
  <figure className='image is-16by9 is-hidden-mobile'>
    <img src={props.image} className={classes.Round} alt='' />
  </figure>
)

export default image
