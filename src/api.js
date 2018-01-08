import axios from 'axios'

const USER_LIST_SIZE = 10

const getRandomIntegerBetween = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min

const getRandomUserUrl = () =>
  `https://jsonplaceholder.typicode.com/users/${getRandomIntegerBetween(
    1,
    USER_LIST_SIZE
  )}`

export const getRandomUser = () =>
  axios.get(getRandomUserUrl()).then(({ data }) => data)
