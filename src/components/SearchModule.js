import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    searchResults: [],
    noResults: false
  }

  getBooks = event => {
    const query = event.target.value
    this.setState({ query })

    if (query) {
      BooksAPI.search(query.trim(), 30).then(books => {
        books.length > 0
          ? this.setState({ searchResults: books, noResults: false })
          : this.setState({ searchResults: [], noResults: true })
      })
    } else this.setState({ searchResults: [], noResults: false })
  }

  render() {
    const { query, searchResults, noResults } = this.state
    const { books, changeShelf } = this.props

    return (
      <div className="search-root">
        <h1>Search for Books</h1>
        <div className="search-input">
          <Link className="close-search" to="/">
            Home
          </Link>
          <input
              className="search-field"
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.getBooks}
            />
        </div>
        <div className="search-books-results">
          {searchResults.length > 0 && (
            <div>
              <h3>Search returned {searchResults.length} books </h3>
              <ol className="ret-list">
                {searchResults.map(book => (
                  <Book
                    book={book}
                    books={books}
                    key={book.id}
                    changeShelf={changeShelf}
                  />
                ))}
              </ol>
            </div>
          )}
          {noResults && (
            <div className="no-results">
              <h3>No Search Results</h3>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default Search
