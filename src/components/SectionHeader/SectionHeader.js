import React, { Component } from 'react'

import './SectionHeader.css'

import Text from '../UI/Text/Text'
import Button from '../UI/Button/Button'

class SectionHeader extends Component {
  constructor () {
    super()
    console.log('SH Constructor')
  }

  componentWillMount () {
    console.log('SH WillMount')
  }

  componentDidMount () {
    console.log('SH DidMount')
  }

  render () {
    return (
      <div className='content is-large has-text-centered'>
        <Text
          className='has-text-white is-1 has-text-bold'
          text={this.props.content.title}
        />
        <Text
          className='has-text-white is-3 has-text-italic'
          text={this.props.content.subtitle}
        />
        <Button
          buttonStyle='is-outlined is-info'
          buttonText={this.props.content.buttonText}
        />
      </div>
    )
  }
}

export default SectionHeader
