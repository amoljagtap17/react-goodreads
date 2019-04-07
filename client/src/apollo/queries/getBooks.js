import gql from 'graphql-tag'

const getBooksQuery = gql`
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

export default getBooksQuery
