import React, { Fragment, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import loadable from '@loadable/component'
import client from '../apollo/client'
import Header from './Header'
import SearchBar from './SearchBar'
import BookDetail from './BookDetail'

const BookList = loadable(() => import('./BookList'), {
  fallback: <div>loading BookList component</div>
})

const Main = () => {

  const [searchTerm, setSearchTerm] = useState("")

  return (
    <Fragment>
      <SearchBar setSearchTerm={setSearchTerm} />
      {
        searchTerm !== "" &&
        <BookList
          searchTerm={searchTerm} />
      }
    </Fragment>
  )
}

const App = () => {

  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Route path="/" exact component={Main} />
        <Route path="/books/:bookId" component={BookDetail} />
      </Router>
    </ApolloProvider>
  )
}

export default App
