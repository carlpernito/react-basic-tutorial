import React from "react";

// CSS
import "./booklist.component.css";

import { books } from "../../books";
import Book from "../book/book.component";

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

export default BookList;
