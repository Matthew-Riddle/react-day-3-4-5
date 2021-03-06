import React, { Component } from 'react'

import PropTypes from 'prop-types'

class Icon extends Component {
  render () {
    return (
      <span className={`icon has-text-${this.props.textColor}`}>
        <i className={`fas ${this.props.icon}`} />
      </span>
    )
  }
}

Icon.propTypes = { icon: PropTypes.string }

export default Icon
