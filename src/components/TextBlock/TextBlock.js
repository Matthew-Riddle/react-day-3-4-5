import React from 'react'

import './TextBlock.css'

import TextHeader from './TextHeader/TextHeader'
import TextItem from './TextItem/TextItem'

const textBlock = props => (
  <div className='TextBlock'>
    <TextHeader header={props.headerText} textColor={props.textColor} />
    {props.items.map((item, idx) => (
      <TextItem
        key={idx}
        icon={item.icon}
        text={item.text}
        textColor={props.textColor}
      />
    ))}
  </div>
)

export default textBlock
