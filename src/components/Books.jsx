import React from 'react';
import AddForm from './AddForm';
import Book from './Book';

const Books = () => {
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
