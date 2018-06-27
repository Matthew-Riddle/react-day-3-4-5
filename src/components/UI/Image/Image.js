import React from 'react'

import './Image.css'

const image = props => (
  <figure className='image is-16by9 is-hidden-mobile'>
    <img src={props.image} className='Round' />
  </figure>
)

export default image
