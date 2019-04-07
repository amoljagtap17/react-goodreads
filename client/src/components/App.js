import React from 'react'
import { ApolloProvider } from 'react-apollo'
import client from '../apollo/client'
import Header from './Header'
import BookList from './BookList'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Header />
      <BookList />
    </ApolloProvider>
  )
}

export default App
