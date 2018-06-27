import React, { Component } from 'react'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import Home from './containers/Home/Home'
import Section from './components/Section/Section'

import createImage from './img/create.jpg'
import exploreImage from './img/explore.jpg'
import shareImage from './img/share.jpg'

class App extends Component {
  state = {
    links: [
      { name: 'Home', link: '#' },
      { name: 'Create', link: '#Create' },
      { name: 'Explore', link: '#Explore' },
      { name: 'Share', link: '#Share' }
    ],
    sections: [
      {
        title: 'Create',
        subtitle: 'Create amazing content and do stuff dah!',
        buttonText: 'Learn More',
        image: createImage,
        header: 'Create content to your hearts desire fool',
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
      },
      {
        title: 'Explore',
        subtitle: 'Create amazing content and do stuff dah!',
        buttonText: 'Learn More',
        image: exploreImage,
        header: 'Create content to your hearts desire fool',
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
      },
      {
        title: 'Share',
        subtitle: 'Create amazing content and do stuff dah!',
        buttonText: 'Learn More',
        image: shareImage,
        header: 'Create content to your hearts desire fool',
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
    ]
  }

  render () {
    return (
      <div className='App'>
        <Navbar name='CreationLab' links={this.state.links} />
        <Home />
        {this.state.sections.map(section => (
          <Section key={section.title} section={section} />
        ))}
      </div>
    )
  }
}

export default App
