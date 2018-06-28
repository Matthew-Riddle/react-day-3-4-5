import React, { Component } from 'react'

import './Section.css'

import SectionHeader from '../../components/SectionHeader/SectionHeader'
import SectionBody from '../../components/SectionBody/SectionBody'

import homeImage from '../../img/header.jpg'
import createImage from '../../img/create.jpg'
import exploreImage from '../../img/explore.jpg'
import shareImage from '../../img/share.jpg'

class Section extends Component {
  state = {
    sections: {
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
          },
          inputChangeHandler: (name, value) => {
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
        }
      },
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
      }
    }
  }

  render () {
    return Object.entries(this.state.sections).map(([name, section]) => {
      const header = section.header
        ? <SectionHeader content={section.header} />
        : undefined
      const body = section.body
        ? <SectionBody content={section.body} />
        : undefined
      let sectionStyle = {}

      if (!header && section.body.backgroundImage) {
        sectionStyle = {
          background: `url(${section.body.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'none'
        }
      }
      return (
        <section
          key={name}
          id={name}
          className='is-paddingless Screenheight'
          style={sectionStyle}
        >
          {header
            ? <div className='Header has-background-dark'>
              {header}
            </div>
            : undefined}
          {header
            ? <div className='Content columns'>
              {body}
            </div>
            : <div className='Fullheight'>
              {body}
            </div>}
        </section>
      )
    })
  }
}

export default Section
