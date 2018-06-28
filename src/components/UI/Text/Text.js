import React from 'react'

const text = props => (
  <div className={`has-text-${props.textColor}`}>
    {props.text}
  </div>
)

export default text
