import React, { Component } from 'react'
import './App.css'

import Navbar from './components/Navbar/Navbar'
// import Home from './containers/Home/Home'
// import Section from './components/Section/Section'
import Section from './containers/Section/Section'

// import createImage from './img/create.jpg'
// import exploreImage from './img/explore.jpg'
// import shareImage from './img/share.jpg'

class App extends Component {
  state = {
    links: [
      { name: 'Home', link: '#home' },
      { name: 'Create', link: '#create' },
      { name: 'Explore', link: '#explore' },
      { name: 'Share', link: '#share' }
    ]
  }

  render () {
    return (
      <div className='App'>
        <Navbar name='CreationLab' links={this.state.links} />
        <Section />
      </div>
    )
  }
}

export default App
