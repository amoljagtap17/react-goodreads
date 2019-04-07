const parser = require('xml2json')
const goodreads = require('../axios')

const getBooks = async searchTerm => {

  try {
    const response = await goodreads.get('/search/index.xml', {
      params: {
        'q': searchTerm,
        'search[field]': 'title'
      }
    })

    const xml = response.data

    const options = {
      object: true,
      coerce: true,
      sanitize: false,
      alternateTextNode: 'val'
    }

    const json = parser.toJson(xml, options).GoodreadsResponse.search.results.work

    books = json.map(book => {

      return {
        bookId: book.best_book.id.val,
        avgRating: book.average_rating.type === undefined ? book.average_rating : book.average_rating.val,
        title: book.best_book.title,
        author: book.best_book.author.name,
        imageUrl: book.best_book.image_url
      }
    })

    console.log(books)

    return books

  } catch (err) {
    console.log('err', err)
  }
}

module.exports = getBooks
