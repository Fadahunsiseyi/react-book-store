const CHECK_BOOK = 'bookstore/categories/CHECK';

export const checkBookStatus = () => ({
  type: CHECK_BOOK,
});

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case CHECK_BOOK:
      return 'Under construction';
    default:
      return state;
  }
};
