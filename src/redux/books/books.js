const ADD_BOOK = "bookstore/books/ADD_BOOK";

const REMOVE_BOOK = "bookstore/books/REMOVE_BOOK";

export const addBook = (book) => ({
  type: "ADD_BOOK",
  payload: book,
});
