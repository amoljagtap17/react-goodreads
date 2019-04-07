import React, { useState } from 'react'

const SearchBar = ({ setSearchTerm }) => {

  const [searchText, setSearchText] = useState("")

  return (
    <div className="grid-container">
      <div className="grid-x grid-padding-x">
        <div className="cell">
          <fieldset className="fieldset">
            <legend>Search Books by title</legend>
            <div className="input-group">
              <input
                className="input-group-field"
                type="text"
                placeholder="Enter Search String"
                value={searchText}
                onChange={e => setSearchText(e.target.value)} />
              <div className="input-group-button">
                <button
                  className="button"
                  onClick={() => setSearchTerm(searchText)}>Search</button>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
