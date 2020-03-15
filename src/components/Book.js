import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChangeShelf from './ChangeShelf';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    const { book, books, changeShelf } = this.props;
    console.log(book)
  return (
    <li>
      <div className="book-item">
        <div className="img-cont">
          <img src={book.imageLinks.thumbnail}></img>
          <ChangeShelf book={book} books={books} changeShelf={changeShelf}></ChangeShelf>
        </div>
        <div className="contents">
          <div className="book-title">{book.title}</div>
          {
          book.authors.length &&
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
      </div>
    </li>
  );
  }
}

// const Book = props => {
//   const { book, books, changeShelf } = props;

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
//   );
// };

// Book.propTypes = {
//   book: PropTypes.object.isRequired,
//   books: PropTypes.array.isRequired,
//   changeShelf: PropTypes.func.isRequired
// };

export default Book;