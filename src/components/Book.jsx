import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { bookProps } = props;
  return (
    <>
      <p>{bookProps.title}</p>
      <p>{bookProps.author}</p>
      <button type="button">Delete</button>
    </>
  );
};

Book.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  bookProps: PropTypes.object.isRequired,
};

export default Book;
