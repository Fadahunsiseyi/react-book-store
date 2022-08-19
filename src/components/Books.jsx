import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/books';
import AddForm from './AddForm';
import Book from './Book';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer.booksLists);
  // console.log(books, 'can be used');
  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  return (
    <>
      {books.map((book) => (
        <Book key={book.item_id} bookProps={book} />
      ))}
      <AddForm />
    </>
  );
};

export default Books;
