import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { bookProps } = props;
  const handleRemove = () => {
    dispatch(removeBook(bookProps.item_id));
  };
  return (
    <>
      <p>{bookProps.title}</p>
      <p>{bookProps.author}</p>
      <button type="button" onClick={handleRemove}>
        Delete
      </button>
    </>
  );
};

Book.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  bookProps: PropTypes.object.isRequired,
};

export default Book;
