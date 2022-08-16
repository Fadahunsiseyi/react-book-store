import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addBook } from '../redux/books/books';

const AddForm = () => {
  const [form, setForm] = useState({ title: '', author: '' });
  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };
  return (
    <>
      <h1>ADD BOOK</h1>
      <form>
        <input
          type="text"
          placeholder="Enter book title"
          name="title"
          value={form.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter book Author"
          name="author"
          onChange={handleChange}
        />
        <button type="submit">Add Book</button>
      </form>
    </>
  );
};

export default AddForm;
