import React from 'react'
import { ApolloProvider } from 'react-apollo'
import client from '../apollo/client'
import Header from './Header'
import testFunc from '../apollo/testCall'

const App = () => {

  testFunc()

  return (
    <ApolloProvider client={client}>
      <Header />
    </ApolloProvider>
  )
}

export default App
