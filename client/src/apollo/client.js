import ApolloClient from 'apollo-boost'

const uri = process.env.NODE_ENV === 'production' ? 'https://react-goodreads.herokuapp.com/graphql' : 'http://localhost:4000/graphql'

const client = new ApolloClient({
  uri,
  fetchOptions: {
    credentials: 'include'
  }
})

export default client
