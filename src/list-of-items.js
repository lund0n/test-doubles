import React, { Component } from 'react'
import { func } from 'prop-types'

export default class List extends Component {
  static propTypes = {
    getItems: func.isRequired,
  }
  state = {
    items: [],
  }
  componentDidMount() {
    this.setState({ items: this.props.getItems() })
  }
  render() {
    return <ul>{this.state.items.map((item, i) => <li key={i}>{item}</li>)}</ul>
  }
}
