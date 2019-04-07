import React, { useState } from 'react'
import { ApolloProvider } from 'react-apollo'
import client from '../apollo/client'
import Header from './Header'
import SearchBar from './SearchBar'
import BookList from './BookList'

const App = () => {

  const [showBookList, setShowBookList] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  const onSearchSubmit = () => {
    setShowBookList(true)
  }

  return (
    <ApolloProvider client={client}>
      <Header />
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearchSubmit={onSearchSubmit} />
      {showBookList && <BookList searchTerm={searchTerm} />}
    </ApolloProvider>
  )
}

export default App
