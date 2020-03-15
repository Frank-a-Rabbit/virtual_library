import React, { Component } from "react";
import PropTypes from "prop-types";
import BookShelf from "./BookShelf";

class BookCase extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    const { books, changeShelf } = this.props;
    const shelfTypes = [
      { type: "currentlyReading", title: "Currently Reading" },
      { type: "wantToRead", title: "To Be Read" },
      { type: "read", title: "Read" }
    ];

    return (
      <div className="bookcase">
        {shelfTypes.map((shelf, index) => {
          const shelves = books.filter(book => book.shelf === shelf.type);
          return (
            <div className="book-shelf" key={index}>
              <h2 className="shelf-title">{shelf.title}</h2>
              <div className="items">
                <BookShelf books={shelves} changeShelf={changeShelf}></BookShelf>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BookCase;