import React from 'react'
import { Link } from 'react-router-dom'

const Book = ({ bookId, title, author, imageUrl }) => (
  <div className="cell">
    <div className="card">
      <img src={imageUrl} alt={title} />
      <div className="card-section">
        <Link to={`/books/${bookId}`}>
          <h4>{title}</h4>
        </Link>
        <p>{author}</p>
      </div>
    </div>
  </div>
)

export default Book
