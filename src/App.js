import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookCase from './components/BookCase';
import { Link } from 'react-router-dom';
import SearchModule from './components/SearchModule';
import "./App.css"

class BooksApp extends React.Component {
  state = { books: [] };

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }));
  }

  changeShelf = (selectedBook, shelfType) => {
    BooksAPI.update(selectedBook, shelfType).then(response => {
      selectedBook.shelf = shelfType;
      this.setState(prevState => ({
        books: prevState.books
          .filter(book => book.id !== selectedBook.id)
          .concat(selectedBook)
      }));
    });
  };

  render() {
    const { books } = this.state

    return (
      <div id="app">
          <Route
            path="/search"
            render={() => (
              <SearchModule books={books} changeShelf={this.changeShelf}></SearchModule>
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <div className="root">
                <div className="title-cont">
                  <h1>
                    <span>Virtual</span>
                    <span>Library</span>
                  </h1>
                </div>
                <BookCase books={books} changeShelf={this.changeShelf}></BookCase>
                <div className="open-search">
                  <Link to="/search">Search Books</Link>
                </div>
              </div>
            )}
          />
      </div>
    )
  }
}

export default BooksApp;