import React from 'react'

// history.push("/")
const BookDetail = ({ history, match }) => (
  <div>BookDetail {console.log('props', match.params.bookId)}</div>
)

export default BookDetail