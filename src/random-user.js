import React, { Component } from 'react'
import { func } from 'prop-types'

export default class RandomUser extends Component {
  static propTypes = {
    getUser: func,
  }
  state = {
    id: 0,
    name: '',
    username: '',
    email: '',
  }
  updateUser = () => {
    this.props
      .getUser()
      .then(({ id, name, username, email }) =>
        this.setState({ id, name, username, email })
      )
  }
  componentDidMount() {
    this.updateUser()
  }
  render() {
    const { id, name, username, email } = this.state
    return (
      <div>
        <button onClick={this.updateUser}>Get User</button>
        <dl>
          <dt>ID:</dt>
          <dd>{id}</dd>
          <dt>Name:</dt>
          <dd>{name}</dd>
          <dt>Username:</dt>
          <dd>{username}</dd>
          <dt>Email:</dt>
          <dd>{email}</dd>
        </dl>
      </div>
    )
  }
}
