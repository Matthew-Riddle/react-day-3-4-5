import React from 'react'

import './SectionHeader.css'

import Text from '../../UI/Text/Text'
import Button from '../../UI/Button/Button'

const section = props => (
  <div class='header has-background-dark'>
    <div class='content is-large has-text-centered'>
      <Text className='has-text-white is-1 has-text-bold' text={props.title} />
      <Text
        className='has-text-white is-3 has-text-italic'
        text={props.subtitle}
      />
      <Button style='is-outlined is-info' buttonText={props.buttonText} />
    </div>
  </div>
)

export default section
