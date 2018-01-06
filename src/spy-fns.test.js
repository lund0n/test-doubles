import React from 'react'
import { mount } from 'enzyme'

const createClickHandler = () => {
  const clickHandler = () => {
    clickHandler.count++
  }
  clickHandler.count = 0
  return clickHandler
}

test('tracks clicks', () => {
  const clickHandler = createClickHandler()
  const component = mount(<button onClick={clickHandler}>click me</button>)
  component.simulate('click')
  component.simulate('click')
  component.simulate('click')
  expect(clickHandler.count).toEqual(3)
})
