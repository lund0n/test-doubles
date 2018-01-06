import React from 'react'
import { array, func } from 'prop-types'

const TransformList = ({ transform, items }) => (
  <ul>{items.map((item, i) => <li key={i}>{transform(item)}</li>)}</ul>
)

TransformList.propTypes = {
  items: array,
  transform: func,
}

export default TransformList
