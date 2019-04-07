const axios = require('axios')

const KEY = process.env.KEY

module.exports = axios.create({
  baseURL: 'https://www.goodreads.com',
  params: {
    key: KEY
  }
})