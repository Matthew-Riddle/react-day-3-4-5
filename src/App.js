import React, { Component } from 'react'
import classes from './App.css'
import { Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
// import Home from './containers/Home/Home'
// import Section from './components/Section/Section'
import Section from './containers/Section/Section'
import TicTacToe from './containers/TicTacToe/TicTacToe'

import homeImage from './img/header.jpg'
import createImage from './img/create.jpg'
import exploreImage from './img/explore.jpg'
import shareImage from './img/share.jpg'

class App extends Component {
  constructor () {
    super()
    console.log('App Constructor called')
  }

  state = {
    sections: {
      create: {
        header: {
          title: 'Create',
          subtitle: 'Create amazing content and do stuff dah!',
          buttonText: 'Learn More'
        },
        body: {
          image: createImage,
          header: 'Create content to your hearts desire fool',
          textColor: 'dark',
          items: [
            {
              icon: 'fa-check',
              text: 'Some random text about items'
            },
            {
              icon: 'fa-check',
              text: 'Some even randomer not a word text'
            }
          ]
        }
      },
      explore: {
        header: {
          title: 'Explore',
          subtitle: 'Create amazing content and do stuff dah!',
          buttonText: 'Learn More'
        },
        body: {
          image: exploreImage,
          header: 'Create content to your hearts desire fool',
          textColor: 'dark',
          items: [
            {
              icon: 'fa-check',
              text: 'Some random text about items'
            },
            {
              icon: 'fa-check',
              text: 'Some even randomer not a word text'
            }
          ]
        }
      },
      share: {
        header: {
          title: 'Share',
          subtitle: 'Create amazing content and do stuff dah!',
          buttonText: 'Learn More'
        },
        body: {
          image: shareImage,
          header: 'Create content to your hearts desire fool',
          textColor: 'dark',
          items: [
            {
              icon: 'fa-check',
              text: 'Some random text about items'
            },
            {
              icon: 'fa-check',
              text: 'Some even randomer not a word text'
            }
          ]
        }
      },
      tictactoe: {
      },
      home: {
        body: {
          backgroundImage: homeImage,
          header: 'Build social profiles and gain revenue and profits',
          textColor: 'white',
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
          ],
          inputs: {
            username: { placeholder: 'Username', icon: 'fa-user', value: '' },
            email: { placeholder: 'Email', icon: 'fa-envelope', value: '' },
            password: { placeholder: 'Password', icon: 'fa-key', value: '' },
            confirmPassword: {
              placeholder: 'Confirm Password',
              icon: 'fa-key',
              value: ''
            }
          }
        }
      }
    }
  }

  inputChangeHandler = (sectionName, inputName, value) => {
    this.setState((prevState) => ({
      sections: {
        ...prevState.sections,
        [sectionName]: {
          ...prevState.sections[sectionName],
          body: {
            ...prevState.sections[sectionName].body,
            inputs: {
              ...prevState.sections[sectionName].body.inputs,
              [inputName]: {
                ...prevState.sections[sectionName].body.inputs[inputName],
                value
              }
            }
          }
        }
      }
    }))
  }

  componentWillMount () {
    console.log('App WillMount')
  }

  componentDidMount () {
    console.log('App DidMount')
  }

  render () {
    console.log(this.props.location)
    console.log(this.props.history)
    return (
      <div className={classes.App}>
        <Navbar name='CreationLab' links={Object.keys(this.state.sections)} />
        <Switch>
          <Route path='/tictactoe' component={TicTacToe} />
          {
            Object.entries(this.state.sections).map(([sectionName, section]) =>
              <Route
                path={`/${sectionName === 'home' ? '' : sectionName}`}
                render={() => <Section
                  key={sectionName}
                  sectionName={sectionName}
                  header={section.header}
                  body={section.body}
                  changed={(inputName, value) => this.inputChangeHandler(sectionName, inputName, value)}
                />}
              />

            )
          }
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
