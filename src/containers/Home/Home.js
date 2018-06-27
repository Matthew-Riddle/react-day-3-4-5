import React, { Component } from 'react'

import './Home.css'

import TextBlock from '../../components/TextBlock/TextBlock'
import Form from '../../components/Form/Form'

import homeBackground from '../../img/header.jpg'

class Home extends Component {
  state = {
    inputs: {
      username: { placeholder: 'Username', icon: 'fa-user', value: '' },
      email: { placeholder: 'Email', icon: 'fa-envelope', value: '' },
      password: { placeholder: 'Password', icon: 'fa-key', value: '' },
      confirmPassword: {
        placeholder: 'Confirm Password',
        icon: 'fa-key',
        value: ''
      }
    },
    textBlock: {
      header: 'Build social profiles and gain revenue and profits',
      items: [
        {
          icon: 'fa-check',
          text: 'Some random text about items'
        },
        {
          icon: 'fa-check',
          text: 'Some even randomer not a word text'
        },
        {
          icon: 'fa-check',
          text: 'Crazy nonsense about stuff'
        },
        {
          icon: 'fa-check',
          text: 'Here we go again'
        }
      ]
    }
  }

  inputChangeHandler = (name, value) => {
    this.setState({
      inputs: {
        ...this.state.inputs,
        [name]: {
          ...this.state.inputs[name],
          value
        }
      }
    })
  }

  render () {
    return (
      <section
        id='home'
        class='hero is-primary is-fullheight'
        style={{
          background: `url(${homeBackground})`,
          backgroundSize: 'cover',
          height: '100vh'
        }}
      >
        <div class='hero-body dark-overlay'>
          <div class='container'>
            <div class='columns is-multiline'>
              <div class='column is-8 flex'>
                <TextBlock
                  headerText={this.state.textBlock.header}
                  items={this.state.textBlock.items}
                />
              </div>
              <div class='column is-4'>
                <Form
                  inputs={this.state.inputs}
                  changed={this.inputChangeHandler}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Home
