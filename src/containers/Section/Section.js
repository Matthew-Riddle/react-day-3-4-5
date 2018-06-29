import React, { Component } from 'react'
import { Route, withRouter, Redirect } from 'react-router-dom'

import classes from './Section.css'

import SectionHeader from '../../components/SectionHeader/SectionHeader'
import SectionBody from '../../components/SectionBody/SectionBody'
import Button from '../../components/UI/Button/Button'

class Section extends Component {
  constructor () {
    super()
    console.log('Section Constructor called')
  }

  componentWillMount () {
    console.log('Section WillMount')
  }

  componentDidMount () {
    console.log('Section DidMount')
  }

  componentWillUpdate () {
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('Section ShouldUpdate?')
    console.log(
      `${this.props.sectionName}: ${nextProps.body.inputs !==
        this.props.body.inputs
        ? 'Yes'
        : 'No'}`
    )
    return nextProps.body.inputs !== this.props.body.inputs
  }

  componentWillUnmount () {
  }

  render () {
    const header = this.props.header
      ? <SectionHeader content={this.props.header} />
      : ''
    const body = this.props.body
      ? <SectionBody content={this.props.body} changed={this.props.changed} />
      : ''
    let sectionStyle = {}

    if (!header && this.props.body.backgroundImage) {
      sectionStyle = {
        background: `url(${this.props.body.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'none'
      }
    }
    return (
      <section
        key={this.props.sectionName}
        id={this.props.sectionName}
        className={`is-paddingless ${classes['Screen-height']}`}
        style={sectionStyle}
      >
        {header ? <div className={`${classes.Header} has-background-dark`}>
          {header}
        </div> : ''}
        {header ? <div className={`${classes.Content} columns`}>
          {body}
        </div> : <div className={classes['Full-height']}>
          {body}
        </div>}
        <Route
          path={`${this.props.location.pathname}/boo`}
          component={Button}
        />
      </section>
    )
  }
}

export default withRouter(Section)
