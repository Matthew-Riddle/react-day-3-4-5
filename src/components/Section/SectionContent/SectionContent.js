import React from 'react'

import './SectionContent.css'

import Image from '../../UI/Image/Image'
import TextBlock from '../../TextBlock/TextBlock'

const section = props => (
  <div className='Content columns'>
    <div className='column is-6'>
      <Image image={props.image} />
    </div>
    <div className='column is-6'>
      <TextBlock headerText={props.header} items={props.items} />
    </div>
  </div>
)

export default section
