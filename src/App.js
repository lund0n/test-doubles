import React, { Component } from 'react'
import RandomUser from './random-user'
import { getRandomUser } from './api'

class App extends Component {
  render() {
    return <RandomUser getUser={getRandomUser} />
  }
}

export default App
