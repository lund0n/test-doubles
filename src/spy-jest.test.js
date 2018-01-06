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
  // const clickHandler = createClickHandler()
  const clickHandler = jest.fn()
  const component = mount(<button onClick={clickHandler}>click me</button>)
  component.simulate('click')
  component.simulate('click')
  component.simulate('click')
  // expect(clickHandler.mock.calls.length).toEqual(3)
  expect(clickHandler).toHaveBeenCalledTimes(3)
})
