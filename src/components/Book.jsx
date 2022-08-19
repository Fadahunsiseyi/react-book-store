import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { bookProps, id } = props;
  const handleRemove = () => {
    dispatch(removeBook(id));
  };
  return (
    <>
      <p>{bookProps[0].title}</p>
      <p>{bookProps[0].author}</p>
      <button type="button" onClick={handleRemove}>
        Delete
      </button>
    </>
  );
};

Book.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  bookProps: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
