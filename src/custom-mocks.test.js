import { getRandomLetter } from './letters'
// import words from 'words'
// jest.mock('words', () => require('identity-obj-proxy'), { virtual: true })

test.skip('letters', () => {
  expect(getRandomLetter()).toEqual('J')
})

const words = {}

test.skip('where are the words?', () => {
  expect(words.foo).toEqual('foo')
  expect(words.bar).toEqual('bar')
  expect(words.wat).toEqual('wat')
})
