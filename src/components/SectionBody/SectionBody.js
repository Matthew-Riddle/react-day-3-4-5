import React, { Fragment, Component } from 'react'

import './SectionBody.css'

import Image from '../UI/Image/Image'
import TextBlock from '../TextBlock/TextBlock'
import Form from '../Form/Form'

class SectionBody extends Component {
  constructor () {
    super()
    console.log('SB Constructor')
  }

  componentWillMount () {
    console.log('SB WillMount')
  }

  componentDidMount () {
    console.log('SB DidMount')
  }

  render () {
    return (
      <Fragment>
        <div className='column is-6'>
          {
            this.props.content.image
              ? <Image image={this.props.content.image} />
              : <TextBlock
                headerText={this.props.content.header}
                items={this.props.content.items}
                textColor={this.props.content.textColor}
              />
          }
        </div>
        <div className='column is-6'>
          {
            this.props.content.image
              ? <TextBlock
                headerText={this.props.content.header}
                items={this.props.content.items}
                textColor={this.props.content.textColor}
              />
              : <Form
                inputs={this.props.content.inputs}
                changed={this.props.changed}
              />
          }
        </div>
      </Fragment>
    )
  }
}

export default SectionBody
