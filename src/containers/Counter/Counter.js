import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: 0
  }

  incrementCounter = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }

  decrementCounter = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }))
  }

  render () {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.incrementCounter}>+</button>
        <button onClick={this.decrementCounter}>-</button>
      </div>
    )
  }
}

export default Counter
