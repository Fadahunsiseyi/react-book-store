import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import '../styles/book.css';
import ProgressBar from './ProgressBar';
import Chapter from './Chapter';

const Book = (props) => {
  const dispatch = useDispatch();
  const limit = Math.floor(Math.random() * 100);
  const { bookProps } = props;
  const handleRemove = () => {
    dispatch(removeBook(bookProps.item_id));
  };
  return (
    <div className="book">
      <div className="book-container">
        <div className="book-info">
          <p className="cate">{bookProps.category}</p>
          <h2 className="title">{bookProps.title}</h2>
          <h3 className="author">{bookProps.author}</h3>
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
        <div className="chapter">
          <ProgressBar limit={limit} />
          <Chapter />
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  bookProps: PropTypes.object.isRequired,
};

export default Book;
