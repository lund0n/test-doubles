import axios from 'axios'
import { getRandomIntegerBetween } from './util'

const USER_LIST_SIZE = 10

const getRandomUserUrl = () =>
  `https://jsonplaceholder.typicode.com/users/${getRandomIntegerBetween(
    1,
    USER_LIST_SIZE
  )}`

export const getRandomUser = () =>
  axios.get(getRandomUserUrl()).then(({ data }) => data)
