import React, { Fragment } from 'react'

import './TextBlock.css'

import TextHeader from './TextHeader/TextHeader'
import TextItem from './TextItem/TextItem'

const textBlock = props => (
  <Fragment>
    <TextHeader header={props.headerText} />
    {props.items.map((item, idx) => (
      <TextItem key={idx} icon={item.icon} text={item.text} />
    ))}
  </Fragment>
)

export default textBlock
