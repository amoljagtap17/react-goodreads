import React from 'react'
import { Query } from 'react-apollo'
import getBooksQuery from '../apollo/queries/getBooks'
import Book from './Book'

const BookList = () => (
  <Query query={getBooksQuery}>
    {
      ({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>

        if (error) return <p>Error...</p>

        return (
          <div className="grid-container">
            <div className="grid-x grid-padding-x medium-up-3">
              {
                data.books.map(({ bookId, author, imageUrl, title }) => (
                  <Book
                    key={bookId}
                    bookId={bookId}
                    author={author}
                    imageUrl={imageUrl}
                    title={title} />
                ))
              }
            </div>
          </div>
        )
      }
    }
  </Query>
)

export default BookList
