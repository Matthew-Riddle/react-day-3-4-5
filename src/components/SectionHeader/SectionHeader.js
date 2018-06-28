import React from 'react'

import './SectionHeader.css'

import Text from '../UI/Text/Text'
import Button from '../UI/Button/Button'

const section = props => (
  <div className='content is-large has-text-centered'>
    <Text
      className='has-text-white is-1 has-text-bold'
      text={props.content.title}
    />
    <Text
      className='has-text-white is-3 has-text-italic'
      text={props.content.subtitle}
    />
    <Button
      buttonStyle='is-outlined is-info'
      buttonText={props.content.buttonText}
    />
  </div>
)

export default section
