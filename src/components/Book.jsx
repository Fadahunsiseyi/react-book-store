import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import '../styles/book.css';

const Book = (props) => {
  const dispatch = useDispatch();
  const { bookProps } = props;
  const handleRemove = () => {
    dispatch(removeBook(bookProps.item_id));
  };
  return (
    <div className="book">
      <div className="book-container">
        <div className="book-info">
          <p>{bookProps.category}</p>
          <h2>{bookProps.title}</h2>
          <h3>{bookProps.author}</h3>
          <div className="btn-control">
            <button type="button">Comment</button>
            <div className="divider" />
            <button type="button" onClick={handleRemove}>
              Delete
            </button>
            <div className="divider" />
            <button type="button">Edit</button>
          </div>
        </div>
        <div className="book-chapter"> </div>
      </div>
      {/* <p>{bookProps.title}</p>
      <p>{bookProps.author}</p>
      <button type="button" onClick={handleRemove}>
        Delete
      </button> */}
    </div>
  );
};

Book.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  bookProps: PropTypes.object.isRequired,
};

export default Book;
