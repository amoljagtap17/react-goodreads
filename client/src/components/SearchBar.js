import React from 'react'

const SearchBar = () => (
  <form onSubmit={event => console.log(event)}>
    <div className="grid-container">
      <div className="grid-x grid-padding-x">
        <div className="cell">
          <fieldset className="fieldset">
            <legend>Search Books by title</legend>
            <div className="input-group">
              <input className="input-group-field" type="text" name="searchTerm" id="searchTerm" placeholder="Enter Search String" />
              <div className="input-group-button">
                <input type="submit" className="button" value="Search" />
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  </form>
)

export default SearchBar
