import React, { Component } from "react"
import PropTypes from "prop-types"

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    const { book, books, changeShelf } = this.props

    let bookTitle = book.title.length > 0 && book.title !== undefined ? book.title : "Title Undefined"
    const bgImg = book.imageLinks && book.imageLinks.thumbnail
      ? book.imageLinks.thumbnail
      : null

    const update = (event) => {
      changeShelf(book, event.target.value)
    }

    let current = "none"

    for(let b of books){
      if(b.id === book.id){
        current = b.shelf
      }
    }
    return (
      <li>
        <div className="book-item">
          <div className="img-cont">
            <div className="img-bg" style={{ backgroundImage: `url(${bgImg})` }}>
              {
                bgImg === null && 
                  <span>No Image Available</span>
              }
            </div>
          </div>
          <div className="contents">
            <div className="book-title">{bookTitle}</div>
            {
            book.authors && 
              <div>
                Written By:
              </div>
            }
            {
            book.authors && ( 
                book.authors.map((author, index) => (
                    <div className="author" key={index}>
                      {author}
                    </div>
                  )
                )
              )}
          </div>
          <div className="changer">
            <select onChange={update} defaultValue={current}>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
      </li>
    )
  }
}

export default Book