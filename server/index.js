const { ApolloServer, gql } = require('apollo-server')
const getBooks = require('./rest')

const typeDefs = gql`
  type Query {
    hello: String!
  }
`

const resolvers = {
  Query: {
    hello: (parent, args, context, info) => getBooks('nodejs')
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
