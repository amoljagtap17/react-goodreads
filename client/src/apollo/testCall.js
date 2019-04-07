import client from './client'
import getBooksQuery from './queries/getBooks'

const testFunc = () => {
  client.query({
    query: getBooksQuery
  }).then(result => console.log('result', result.data))
}

export default testFunc
