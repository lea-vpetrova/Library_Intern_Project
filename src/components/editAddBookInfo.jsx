/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react";

export const EditAddBookInfo = ({ onBookCreated, selectedBook }) => {
  const formRef = useRef();

  useEffect(() => {
    if (selectedBook) {
      formRef.current?.reset();
      const fields = formRef.current?.elements;
      fields.title.value = selectedBook.title;
      fields.author.value = selectedBook.author;
      fields.isbn.value = selectedBook.isbn;
      fields.price.value = selectedBook.price;
      fields.publicationDate.value = selectedBook.publicationDate
        .toISOString()
        .split("T")[0];
    } else {
      formRef.current?.reset();
    }
  }, [selectedBook]);

  return (
    <div className="sidebar-container">
      <form
        className="content-details"
        style={{ display: "flex", flexDirection: "column", gap: 5 }}
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          const data = Object.fromEntries(new FormData(e.target).entries());
          onBookCreated?.({
            ...data,
            publicationDate: new Date(data.publicationDate),
          });
          formRef.current?.reset();
        }}
      >
        <div className="cDetailsTitle">
          <h2><strong>Content details</strong></h2>
        </div>
        <label>Title</label>
        <input id="field1" name="title" required />

        <label>Author</label>
        <input id="field2" name="author" required />

        <label>Isbn</label>
        <input id="field3" name="isbn" required />

        <label>Price</label>
        <input id="field4" name="price" type="decimal" required />

        <label>Publication Date</label>
        <input id="field5" name="publicationDate" type="date" required />

        <label>Image</label>
        <input id="imageUrl" name="imageUrl" type="url" />

        <div>
          <button
            id="saveButton"
            className="button is-dark"
            type="submit">
            Save
          </button>
          <button
            id="clearButton"
            className="button is-link"
            type="reset"
            onClick={() => formRef.current?.reset()}
            style={{ marginLeft: '10px' }}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditAddBookInfo;
