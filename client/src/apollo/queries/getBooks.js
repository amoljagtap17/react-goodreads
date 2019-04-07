import gql from 'graphql-tag'

const GET_BOOKS_QUERY = gql`
  query Books($searchTerm: String!) {
    books(searchTerm: $searchTerm) {
      bookId
      title
      author
      imageUrl
    }
  }
`

export default GET_BOOKS_QUERY
