import React from 'react'

const input = props => (
  <div className='field'>
    <div className='control has-icons-left'>
      <input
        className='input'
        type='text'
        placeholder={props.input.placeholder}
        value={props.input.value}
        onChange={event => props.changed(event.target.value)}
      />
      <span className='icon is-small is-left'>
        <i className={`fas ${props.input.icon}`} />
      </span>
    </div>
  </div>
)

export default input
