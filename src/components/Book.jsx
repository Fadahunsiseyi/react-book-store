import React from 'react';

const Book = (props) => {
  const {
    bookProps: {id, title, author}
  } = props;
  console.log(id, title, author, props);
  return (
    <>
      <p>{title}</p>
      <p>{author}</p>
      <button type="button">Delete</button>
    </>
  );
};

export default Book;
