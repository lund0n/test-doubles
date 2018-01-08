import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'
import { ARTHUR_DENT, FORD_PREFECT } from './mock-users'
import RandomUser from './random-user'

test('Renders correct user', () => {
  const mockedUserPromise = Promise.resolve(ARTHUR_DENT)
  const getUser = jest.fn().mockReturnValue(mockedUserPromise)
  const component = renderer.create(<RandomUser getUser={getUser} />)
  return mockedUserPromise.then(() => {
    expect(component.toJSON()).toMatchSnapshot()
  })
})

test('Renders new user on button click', () => {
  const user1 = Promise.resolve(ARTHUR_DENT)
  const user2 = Promise.resolve(FORD_PREFECT)
  const getUser = jest
    .fn()
    .mockReturnValueOnce(user1)
    .mockReturnValue(user2)
  const component = mount(<RandomUser getUser={getUser} />)
  return user1
    .then(() => {
      component.update() // Y U no work w/o an update here?
      expect(component.find('User').props()).toEqual(ARTHUR_DENT)
      component
        .update()
        .find('button')
        .simulate('click')
      return user2
    })
    .then(() => {
      component.update()
      expect(component.find('User').props()).toEqual(FORD_PREFECT)
    })
})
