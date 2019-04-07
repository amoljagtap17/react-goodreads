import gql from 'graphql-tag'
import client from './client'

const testFunc = () => {
  client.query({
    query: gql`
    {
      books(searchTerm: "graphql") {
        bookId
        avgRating
        title
        author
        imageUrl
      }
    }
  `
  }).then(result => console.log('result', result.data))
}

export default testFunc
