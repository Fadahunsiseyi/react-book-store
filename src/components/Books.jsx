import React from 'react';
import Book from './Book';

const Books = () => {
  const books = [
    {
      id: Date.now(),
      title: 'Things fall apart',
      author: 'Chinua Achebe',
    },
    {
      id: Date.now(),
      title: 'Silver Spoon',
      author: 'Chinua Achebe',
    },
  ];
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} bookProps={book} />
      ))}
    </div>
  );
};

export default Books;
