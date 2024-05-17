import { useMemo } from "react";

export const BooksList = ({ books = [], onDelete, onSelect }) => {
  const sortedBooks = useMemo(() => books.sort((a, b) => a.id - b.id), [books]);

  return (
    <div className="content-list">
      <div className="columns is-multiline">
        {sortedBooks.map((book) => (
          <div key={book.id} className="column is-half">
            <div className="box">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-96x96">
                    <img src={book.imageUrl} alt={book.title} />
                  </figure>
                </div>
                <div className="media-content">
                  <div onClick={() => onSelect?.(book)}>
                    <p className="id">ID: {book.id}</p>
                    <p className="field1">Title: {book.title}</p>
                    <p className="field2">Author: {book.author}</p>
                    <p className="field3">ISBN: {book.isbn}</p>
                    <p className="field4">Price: ${book.price}</p>
                    <p className="field5">Release Date: {book.publicationDate.toDateString()}</p>
                  </div>
                  <div className="deleteButton">
                    <button
                      id="deleteButton"
                      className="button is-danger"
                      onClick={() => onDelete?.(book.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksList;
