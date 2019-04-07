const axios = require('axios')

const API_KEY = process.env.KEY

module.exports = axios.create({
  baseURL: 'https://www.goodreads.com',
  params: {
    key: API_KEY
  }
})