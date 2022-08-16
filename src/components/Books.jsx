import React from 'react';
import { useSelector } from 'react-redux';
import AddForm from './AddForm';
import Book from './Book';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  // console.log(books);
  return (
    <>
      {books.map((book) => (
        <Book key={book.id} bookProps={book} />
      ))}
      <AddForm />
    </>
  );
};

export default Books;
