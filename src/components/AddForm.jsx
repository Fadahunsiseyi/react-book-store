import React from 'react';

const AddForm = () => (
  <form>
    <input type="text" placeholder="Title" name="title" />
    <input type="text" placeholder="Author" name="author" />
    <button type="submit">Add Book</button>
  </form>
);

export default AddForm;
