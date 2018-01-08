import React from 'react'
import renderer from 'react-test-renderer'
import User from './user'
import { ARTHUR_DENT } from './mock-users'

test('renders correctly', () => {
  const component = renderer.create(<User {...ARTHUR_DENT} />).toJSON()
  expect(component).toMatchSnapshot()
})
