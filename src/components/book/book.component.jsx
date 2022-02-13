import React from "react";

//CSS
import "./book.css";

function Book({ title, author, img }) {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = () => {
    alert("hello world");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  const onMouseOverHandler = (title) => {
    console.log(title);
  };

  return (
    <article className="book" onMouseOver={() => onMouseOverHandler(title)}>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
}

export default Book;
