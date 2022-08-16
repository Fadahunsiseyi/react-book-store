import React from 'react';
import { useSelector } from 'react-redux';
import AddForm from './AddForm';
import Book from './Book';

const Books = () => {
  const book = useSelector((state) => console.log(state.booksReducer));
  console.log(book);
  const books = [
    {
      id: 1,
      title: 'Things fall apart',
      author: 'Chinua Achebe',
    },
    {
      id: 2,
      title: 'Silver Spoon',
      author: 'Chinua Achebe',
    },
  ];
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
