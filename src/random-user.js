import React, { Component } from 'react'
import { func } from 'prop-types'
import User from './user'

export default class RandomUser extends Component {
  static propTypes = {
    getUser: func.isRequired,
  }
  state = {
    id: 0,
    name: '',
    username: '',
    email: '',
  }
  updateUser = () => {
    this.props.getUser().then(({ id, name, username, email }) => {
      this.setState({ id, name, username, email })
    })
  }
  componentDidMount() {
    this.updateUser()
  }
  render() {
    const { id, name, username, email } = this.state
    return (
      <div>
        <button onClick={this.updateUser}>Get User</button>
        <User id={id} name={name} username={username} email={email} />
      </div>
    )
  }
}
