import React, { Component } from 'react'

const style = {
  border: '#000 solid 2px',
  display: 'inline-block',
  height: '40px',
  width: '40px',
  backgroundColor: '#fff',
  verticalAlign: 'top'
}

class Square extends Component {
  render () {
    return (
      <div style={style} onClick={this.props.clicked}>
        {this.props.text}
      </div>
    )
  }
}

Square.defaultProps = { text: '', clicked: () => console.log('I am default') }

export default Square
