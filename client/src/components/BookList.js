import React from 'react'
import { Query } from 'react-apollo'
import getBooksQuery from '../apollo/queries/getBooks'

const BookList = () => (
  <Query query={getBooksQuery}>
    {
      ({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>

        if (error) return <p>Error...</p>

        return data.books.map(({ bookId, author, avgRating, imageUrl, title }) => (
          <div key={bookId}>
            <p>{author}</p>
            <p>{title} {avgRating}</p>
          </div>
        ))
      }
    }
  </Query>
)

export default BookList
