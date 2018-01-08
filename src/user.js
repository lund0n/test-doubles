import React from 'react'
import { number, string } from 'prop-types'

const User = ({ id, name, username, email }) => (
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
)
User.propTypes = {
  id: number.isRequired,
  name: string.isRequired,
  username: string.isRequired,
  email: string.isRequired,
}

export default User
