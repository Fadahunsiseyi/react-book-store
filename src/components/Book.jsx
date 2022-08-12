import React from 'react';

const Book = (props) => {
  const {
    bookProps: {id, title, author}
  } = props;
  console.log(id, title, author, props);
  return (
    <div>
      The book
    </div>
  );
};

export default Book;
