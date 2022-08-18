import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/books';
import AddForm from './AddForm';
import Book from './Book';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer);
  const bookId = Object.keys(books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  return (
    <>
      {bookId.map((id) => (
        <Book key={id} id={id} bookProps={books[id]} />
      ))}
      <AddForm />
    </>
  );
};

export default Books;
