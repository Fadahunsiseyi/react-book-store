import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_BOOK = 'bookstore/books/FETCH_BOOK';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const BOOK_API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/mfsMj8Rjeqs9e9h9wYCP/books';

const initialState = {
  booksLists: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_BOOK}/fulfilled`:
      return {
        ...state,
        booksLists: [...action.payload],
      };
    case `${ADD_BOOK}/fulfilled`:
      return {
        ...state,
        booksLists: [...state.booksLists, action.payload],
      };
    case `${REMOVE_BOOK}/fulfilled`:
      return {
        ...state,
        booksLists: state.booksLists.filter((book) => book.item_id !== action.payload),
      };
    default:
      return state;
  }
};

const convertKeys = (dataKey) => {
  // console.log(dataKey);
  const data = Object.keys(dataKey).map((id) => ({
    item_id: id,
    title: dataKey[id][0].title,
    author: dataKey[id][0].author,
    category: dataKey[id][0].category,
  }));
  console.log(data, 'i am supposed to be here');
  return data;
};

// export const fetchBooks = () => async (dispatch) => {
//   const result = await axios.get(BOOK_API);
//   dispatch({ type: FETCH_BOOK, payload: result.data });
// };

export const fetchBooks = createAsyncThunk(FETCH_BOOK, async () => {
  const result = await fetch(BOOK_API);
  console.log(result, 'here we go');
  const data = await result.json();
  const convertKey = convertKeys(data);
  return convertKey;
});

// export const addBook = (book) => async (dispatch) => {
//   await axios.post(BOOK_API, book);
//   dispatch(fetchBooks());
// };

export const addBook = createAsyncThunk(ADD_BOOK, async (book) => {
  await axios.post(BOOK_API, book);
  return book;
});

// export const removeBook = (id) => async (dispatch) => {
//   await axios.delete(`${BOOK_API}/${id}`);
//   dispatch(fetchBooks());
// };

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await axios.delete(`${BOOK_API}/${id}`);
  return id;
});
