import axios from 'axios';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/ADD_BOOK';

const FETCH_BOOK = 'bookstore/books/REMOVE_BOOK';

const BOOK_API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const fetchBooks = async (dispatch) => {
    const result = await axios.get(BOOK_API);
    dispatch({ type: FETCH_BOOK, payload: result.data });
}

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOK:
      return action.payload;
    default:
      return state;
  }
};
