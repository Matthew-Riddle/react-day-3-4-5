import React from 'react'

const textHeader = props => (
  <h1
    className={`title is-1 has-text-weight-normal has-text-${props.textColor}`}
  >
    {props.header}
  </h1>
)

export default textHeader
