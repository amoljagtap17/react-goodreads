const parser = require('xml2json')
const goodreads = require('../axios')

const getBook = async bookId => {

  try {
    const response = await goodreads.get(`/book/show/${bookId}.xml`)

    const xml = response.data

    const options = {
      object: true,
      coerce: true,
      sanitize: false,
      alternateTextNode: 'val'
    }

    const json = parser.toJson(xml, options).GoodreadsResponse.book

    const book = {
      bookId: json.id,
      title: json.title,
      isbn: typeof json.isbn === 'object' ? 0 : json.isbn,
      imageUrl: json.image_url,
      publication: {
        year: typeof json.publication_year === 'object' ? 0 : json.publication_year,
        month: typeof json.publication_month === 'object' ? 0 : json.publication_month,
        day: typeof json.publication_day === 'object' ? 0 : json.publication_day,
      },
      publisher: typeof json.publisher === 'object' ? '' : json.publisher,
      description: typeof json.description === 'object' ? '' : json.description,
      work: {
        reviewsCount: json.work.reviews_count.val,
        ratingsSum: json.work.ratings_sum.val,
        ratingsCount: json.work.ratings_count.val
      },
      author: {
        id: json.authors.author.id,
        name: json.authors.author.name
      }
    }

    console.log('book', book)

    return book

  } catch (err) {
    console.log('err', err)
  }
}

module.exports = getBook
