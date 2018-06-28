import React from 'react'

const button = props => (
  <button className={`button ${props.buttonStyle}`}>{props.buttonText}</button>
)

export default button
