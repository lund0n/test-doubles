import React, { Component } from 'react'
import { func, node } from 'prop-types'

export default class OnMount extends Component {
  static propTypes = {
    children: node.isRequired,
    onMount: func.isRequired,
  }
  componentDidMount() {
    this.props.onMount()
  }
  render() {
    return <div>{this.props.children}</div>
  }
}
