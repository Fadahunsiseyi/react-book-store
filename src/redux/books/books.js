import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_BOOK = 'bookstore/books/REMOVE_BOOK';

const BOOK_API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/mfsMj8Rjeqs9e9h9wYCP/books';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOK:
      return action.payload;
    default:
      return state;
  }
};

export const fetchBooks = () => async (dispatch) => {
  const result = await axios.get(BOOK_API);
  dispatch({ type: FETCH_BOOK, payload: result.data });
};

export const addBook = (book) => async (dispatch) => {
  await axios.post(BOOK_API, book);
  dispatch(fetchBooks());
};

export const removeBook = (id) => async (dispatch) => {
  await axios.delete(`${BOOK_API}/${id}`);
  dispatch(fetchBooks());
};
