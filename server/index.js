const { ApolloServer, gql } = require('apollo-server')
const getBooks = require('./rest')

const typeDefs = gql`
  type Book {
    bookId: Int
    avgRating: Float
    title: String
    author: String
    imageUrl: String
  }

  type Query {
    books(searchTerm: String!): [Book]
  }
`

const resolvers = {
  Query: {
    books: (parent, args, context, info) => getBooks(args.searchTerm)
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
