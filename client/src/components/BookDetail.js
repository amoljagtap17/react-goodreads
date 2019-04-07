import React from 'react'
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo'
import GET_BOOK_QUERY from '../apollo/queries/getBook'

const BookDetail = ({ match }) => (
  <Query query={GET_BOOK_QUERY} variables={{ bookId: parseInt(match.params.bookId) }}>
    {
      ({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>

        if (error) return <p>Error...</p>

        return (
          <div className="grid-container">
            <div className="grid-x grid-padding-y grid-padding-x">
              <div className="cell">
                <Link to="/" className="button">Back</Link>
              </div>
            </div>
            <div className="grid-x grid-padding-x">
              <div className="cell">
                <div className="media-object">
                  <div className="media-object-section">
                    <div className="thumbnail">
                      <img src={data.book.imageUrl} alt={data.book.title} />
                    </div>
                  </div>
                  <div className="media-object-section">
                    <h1>{data.book.title}</h1>
                    <h4>by {data.book.author.name}</h4>
                    <h5><span className="badge primary">1</span> reviews</h5>
                    <p dangerouslySetInnerHTML={{ __html: data.book.description }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }
  </Query>
)

export default BookDetail