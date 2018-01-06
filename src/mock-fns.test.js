import React from 'react'
import { mount } from 'enzyme'
import TransformList from './transform-list'

// wraps the function in a call counter
const createMock = fn => {
  const handler = (...args) => {
    handler.count++
    return fn.apply(null, args)
  }
  handler.count = 0
  return handler
}

test('transform strings', () => {
  const transformer = createMock(value => {
    // The mock behavior
    switch (value) {
      case 0:
        return 'none'
      case 1:
        return 'one'
      default:
        return 'some'
    }
  })
  const component = mount(
    <TransformList transform={transformer} items={[3, 1, 0, 4]} />
  )
  expect(transformer.count).toEqual(4)
  const expected = ['some', 'one', 'none', 'some']
  const results = component.find('li').map(node => node.text())
  expect(results).toEqual(expected)
})
