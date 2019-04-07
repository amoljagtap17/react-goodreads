import ApolloClient from 'apollo-boost'

const uri = process.env.NODE_ENV === 'production' ? 'https://react-goodreads.herokuapp.com/' : 'http://localhost:4000/'

const client = new ApolloClient({
  uri
})

export default client
