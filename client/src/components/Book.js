import React from 'react'

const Book = ({ title, author, imageUrl }) => (
  <div className="cell">
    <div className="card">
      <img src={imageUrl} alt={title} />
      <div className="card-section">
        <h4>{title}</h4>
        <p>{author}</p>
      </div>
    </div>
  </div>
)

export default Book
