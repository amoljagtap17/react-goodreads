import React, { useState } from 'react'
import { ApolloProvider } from 'react-apollo'
import loadable from '@loadable/component'
import client from '../apollo/client'
import Header from './Header'
import SearchBar from './SearchBar'
// import BookList from './BookList'

const BookList = loadable(() => import('./BookList'), {
  fallback: <div>loading BookList component</div>
})

const App = () => {

  const [searchTerm, setSearchTerm] = useState("")

  return (
    <ApolloProvider client={client}>
      <Header />
      <SearchBar setSearchTerm={setSearchTerm} />
      {
        searchTerm !== "" &&
        <BookList
          searchTerm={searchTerm} />
      }
    </ApolloProvider>
  )
}

export default App
