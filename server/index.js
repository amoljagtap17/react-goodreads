const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const getBooks = require('./rest/getBooks')
const getBook = require('./rest/getBook')

const books = require('./dummyJSON')

const typeDefs = gql`
  type Book {
    bookId: Int
    avgRating: Float
    title: String
    author: String
    imageUrl: String
  }

  type PublicationType {
    year: Int,
    month: Int,
    day: Int
  }

  type WorkType {
    reviewsCount: Int,
    ratingsSum: Int,
    ratingsCount: Int
  }

  type AuthorType {
    id: Int,
    name: String
  }

  type BookDetails {
      bookId: Int,
      title: String,
      isbn: Int,
      imageUrl: String,
      publication: PublicationType,
      publisher: String,
      description: String,
      work: WorkType,
      author: AuthorType
    }

  type Query {
    books(searchTerm: String!): [Book]
    book(bookId: Int!): BookDetails
  }
`

const resolvers = {
  Query: {
    // books: (parent, args, context, info) => books,
    books: (parent, args, context, info) => getBooks(args.searchTerm),
    book: (parent, args, context, info) => getBook(args.bookId)
  }
}

const app = express()

const server = new ApolloServer({ typeDefs, resolvers })

server.applyMiddleware({ app })

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 4444

/* server.listen({ port: PORT }).then(({ url }) => {
  console.log(`Server ready at ${url}`)
}) */

app.listen(PORT, () =>
  console.log(`Server listening on PORT ${PORT}`)
)
