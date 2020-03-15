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
    console.log(typeof book)
    const coverImg = book.imageLinks && book.imageLinks.thumbnail
      ? book.imageLinks.thumbnail
      : "https://scx1.b-cdn.net/csz/news/800/2018/universe.jpg"

    const update = (event) => {
      this.props.changeShelf(this.props.book, event.target.value)
    }

    let current = "none"

    for(let b of books){
      b.id === book.id ? current = b.shelf : current = current
    }
    return (
      <li>
        <div className="book-item">
          <div className="img-cont">
            <div className="img-bg" style={{ backgroundImage: `url(${coverImg})` }}></div>
            {/* <ChangeShelf book={book} books={books} changeShelf={changeShelf}></ChangeShelf> */}
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

// const Book = props => {
//   const { book, books, changeShelf } = props

//   return (
//     <li>
//       <div className="book">
//         <div className="book-top">
//           <img src={book.imageLinks.thumbnail}></img>
//           <ChangeShelf book={book} books={books} changeShelf={changeShelf} />
//         </div>
//         <div className="book-title">{book.title}</div>
//         {/* Check for authors and render each on separate line if exist*/
//         book.authors &&
//           book.authors.map((author, index) => (
//             <div className="book-authors" key={index}>
//               {author}
//             </div>
//           ))}
//       </div>
//     </li>
//   )
// }

// Book.propTypes = {
//   book: PropTypes.object.isRequired,
//   books: PropTypes.array.isRequired,
//   changeShelf: PropTypes.func.isRequired
// }

export default Book