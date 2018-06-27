import React from 'react'

const button = props => (
  <button className={`button ${props.style}`}>{props.buttonText}</button>
)

export default button
