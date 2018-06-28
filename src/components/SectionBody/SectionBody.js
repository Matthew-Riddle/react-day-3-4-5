import React, { Fragment } from 'react'

import './SectionBody.css'

import Image from '../UI/Image/Image'
import TextBlock from '../TextBlock/TextBlock'
import Form from '../Form/Form'

const sectionBody = props => (
  <Fragment>
    <div className='column is-6'>
      {props.content.image
        ? <Image image={props.content.image} />
        : <TextBlock
          headerText={props.content.header}
          items={props.content.items}
          textColor={props.content.textColor}
          />}
    </div>
    <div className='column is-6'>
      {props.content.image
        ? <TextBlock
          headerText={props.content.header}
          items={props.content.items}
          textColor={props.content.textColor}
          />
        : <Form
          inputs={props.content.inputs}
          changed={props.content.inputChangeHandler}
          />}
    </div>
  </Fragment>
)

export default sectionBody
