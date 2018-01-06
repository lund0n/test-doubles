import React from 'react'
import { mount } from 'enzyme'
import OnMount from './on-mount'
import ListOfItems from './list-of-items'

test('renders children correctly', () => {
  // const noop = () => {}
  const noop = jest.fn()
  const expected = <div>Hello</div>
  // if onMount is not passed, this will fail.
  const component = mount(<OnMount onMount={noop}>Hello</OnMount>)
  expect(component.contains(expected)).toBe(true)
})

test('renders the list using stubbed getItems', () => {
  // const getItems = () => ['Larry', 'Mo', 'Curly']
  const getItems = jest.fn(() => ['Larry', 'Mo', 'Curly'])
  // const getItems = jest.fn().mockReturnValue(['Larry', 'Mo', 'Curly'])
  const component = mount(<ListOfItems getItems={getItems} />)
  expect(component.find('li')).toHaveLength(3)
})
