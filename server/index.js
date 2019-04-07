const { ApolloServer, gql } = require('apollo-server')
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

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
