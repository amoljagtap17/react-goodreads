import gql from 'graphql-tag'

const GET_BOOK_QUERY = gql`
  query Book($bookId: Int!) {
    book(bookId: $bookId) {
      bookId
      title
      isbn
      imageUrl
      publication {
        year
        month
        day
      }
      publisher
      description
      work {
        reviewsCount
        ratingsSum
        ratingsCount
      }
      author {
        id
        name
      }
    }
  }
`

export default GET_BOOK_QUERY
