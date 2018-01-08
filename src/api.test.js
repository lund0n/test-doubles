import { getRandomUser } from './api'
import axios from 'axios'
import { ARTHUR_DENT } from './mock-users'
jest.mock('axios')

// afterEach(() => {
//   axios.get.mockClear()
// })

test('returns a random user', () => {
  axios.get.mockReturnValueOnce(Promise.resolve({ data: ARTHUR_DENT }))
  return expect(getRandomUser()).resolves.toEqual(ARTHUR_DENT)
})

test.skip('invokes the correct URL', () => {
  axios.get.mockReturnValueOnce(Promise.resolve({ data: ARTHUR_DENT }))
  return getRandomUser().then(() => {
    expect(axios.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/users/1'
    )
  })
})
